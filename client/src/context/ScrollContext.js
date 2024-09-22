import React, { createContext, useRef, useContext } from 'react';

// Create the context
const ScrollContext = createContext();

// Create a provider component
export const ScrollProvider = ({ children }) => {
  const sectionRefs = {
    intro: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    playground: useRef(null),
    values: useRef(null),
    contact: useRef(null),
  };

  return (
    <ScrollContext.Provider value={sectionRefs}>
      {children}
    </ScrollContext.Provider>
  );
};

// Custom hook to use the ScrollContext
export const useScroll = () => useContext(ScrollContext);
