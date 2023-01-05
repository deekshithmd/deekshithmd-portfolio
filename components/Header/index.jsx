import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
export const Header = () => {
  const { toggleTheme } = useTheme();
  return (
    <div>
      <button onClick={() => toggleTheme()}>Mode</button>
      <h1>Header</h1>
    </div>
  );
};
