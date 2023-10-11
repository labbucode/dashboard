// HeaderContext.js

import { createContext, useContext, useState } from 'react';

export const HeaderContext = createContext();

export function useHeader() {
  return useContext(HeaderContext);
}

export function HeaderProvider({ children }) {
  const [title, setTitle] = useState(''); // Initialize with an empty string

  return (
    <HeaderContext.Provider value={{ title, setTitle }}>
      {children}
    </HeaderContext.Provider>
  );
}
