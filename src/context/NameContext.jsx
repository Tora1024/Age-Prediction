import { createContext } from 'preact';
import { useState } from 'preact/hooks';

// Create a context for managing the user's name and age.
export const NameContext = createContext();

// Create a context provider component.
export const NameProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);

  return <NameContext.Provider value={{ name, setName, age, setAge }}>{children}</NameContext.Provider>;
};
