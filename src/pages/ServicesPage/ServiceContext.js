import React, { createContext, useState, useContext } from 'react';

const ServiceContext = createContext();

export const useService = () => useContext(ServiceContext);

export const ServiceProvider = ({ children }) => {
  const [service, setService] = useState('I am looking for... 🔍'); // Default placeholder text

  return (
    <ServiceContext.Provider value={{ service, setService }}>
      {children}
    </ServiceContext.Provider>
  );
};
