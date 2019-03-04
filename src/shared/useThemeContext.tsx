import React from 'react';

export const GlobalThemeContext = React.createContext<{
  myTheme?: string;
  setMyTheme?: (newTheme: string) => void;
}>({});

export const useThemeContext = () => {
  const [myTheme, setMyTheme] = React.useState<string>('light');

  return { myTheme, setMyTheme };
};
