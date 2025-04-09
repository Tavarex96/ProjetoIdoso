// app/(tabs)/context/IdosoProvider.tsx
import React, { useState, ReactNode } from 'react';
import { IdosoContext } from './idoso';

interface Props {
  children: ReactNode;
}

export const IdosoProvider = ({ children }: Props) => {
  const [dadosIdoso, setDadosIdoso] = useState([]);

  return (
    <IdosoContext.Provider value={{ dadosIdoso, setDadosIdoso }}>
      {children}
    </IdosoContext.Provider>
  );
};