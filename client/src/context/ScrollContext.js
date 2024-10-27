// ScrollContext.js
import React, { createContext, useRef, useContext, useEffect, useState } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const sectionRefs = {
    intro: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    playground: useRef(null),
    values: useRef(null),
    contact: useRef(null),
  };

  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    console.log('ScrollProvider mounted'); // Log when the provider mounts
    console.log('Initial sectionRefs:', sectionRefs); // Log initial refs

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(`Section: ${entry.target.dataset.section}, Is Intersecting: ${entry.isIntersecting}`); // Log entry state
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.dataset.section);
        }
      });
    }, options);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
        console.log(`Observing: ${ref.current.id}`); // Log observed sections
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ScrollContext.Provider value={{ sectionRefs, currentSection }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
