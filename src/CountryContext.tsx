import React, { createContext, useState, useEffect } from 'react';

// 1) Create the context
interface CountryContextProps {
  country: string;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
}

// Provide a default value if needed
export const CountryContext = createContext<CountryContextProps>({
  country: 'US',
  setCountry: () => {}
});

interface CountryProviderProps {
  children: React.ReactNode;
}

// 2) Provide the context state
export const CountryProvider: React.FC<CountryProviderProps> = ({ children }) => {
  // Optional: load country from localStorage so it persists across refreshes
  const [country, setCountry] = useState<string>(
    localStorage.getItem('selectedCountry') || 'US'
  );

  useEffect(() => {
    localStorage.setItem('selectedCountry', country);
  }, [country]);

  return (
    <CountryContext.Provider value={{ country, setCountry }}>
      {children}
    </CountryContext.Provider>
  );
};
