import React, { createContext, useState, useContext } from 'react';

const LocationContext = createContext();

export const useLocation = () => useContext(LocationContext);

export const LocationProvider = ({ children }) => {
  // Set the initial state to a more descriptive placeholder
  const [location, setLocation] = useState('Choose location...');

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};
