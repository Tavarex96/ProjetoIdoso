// app/(tabs)/context/IdosoContext.tsx
import { createContext, useState } from 'react';

export const IdosoContext = createContext(null);
export const IdosoProvider = ({ children }) => {
  const [idosos, setIdosos] = useState([]);

  const adicionarIdoso = (idoso) => {
    setIdosos((prevIdosos) => [...prevIdosos, idoso]);
  };

  return (
    <IdosoContext.Provider value={{ idosos, adicionarIdoso }}>
      {children}
    </IdosoContext.Provider>
  );
};