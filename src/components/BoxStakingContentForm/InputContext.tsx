import {
  ChangeEvent, createContext, ReactNode, useState,
} from 'react';

interface InputContextProps {
  value: number;
  handleChange: (inputValue: number) => void;
}

export const InputContext = createContext<InputContextProps>({} as InputContextProps);

interface InputProviderProps {
  children: ReactNode;
}

export function InputContextProvider({ children }: InputProviderProps) {
  const [value, setValue] = useState(0);

  function handleChange(inputValue: number) {
    setValue(inputValue);
  }

  return (
    <InputContext.Provider value={{ value, handleChange }}>
      {children}
    </InputContext.Provider>
  );
}
