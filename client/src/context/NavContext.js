// NavContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1080);

  const toggleVisibility = () => {
    if (isMobile) {
      setIsVisible((prev) => !prev);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth < 1080;
      setIsMobile(mobileView);
      setIsVisible(!mobileView); // Always show NavContainer on larger screens
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial state on component mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <NavContext.Provider value={{ isVisible, toggleVisibility, isMobile }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNavContext = () => useContext(NavContext);
