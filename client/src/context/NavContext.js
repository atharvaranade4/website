import React, { createContext, useContext, useState, useEffect } from 'react';

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Initialize without window reference

  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth < 1080;
      setIsMobile(mobileView);
      setIsVisible(!mobileView); // Always show NavContainer on larger screens
    };

    // Ensure this runs only in the browser
    handleResize(); // Set initial state on component mount
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleVisibility = () => {
    if (isMobile) {
      setIsVisible((prev) => !prev);
    }
  };

  return (
    <NavContext.Provider value={{ isVisible, toggleVisibility, isMobile }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNavContext = () => useContext(NavContext);
