import { useContext, createContext } from 'react';

const LenisContext = createContext(null);

export const useLenis = () => {
  const lenis = useContext(LenisContext);
  if (lenis === null) {
    throw new Error('useLenis must be used within a LenisProvider');
  }
  return lenis;
};

export { LenisContext };
