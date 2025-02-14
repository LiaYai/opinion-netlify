import React from 'react';

interface SwitchProps extends React.HTMLAttributes<HTMLInputElement> {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Switch: React.FC<SwitchProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <>
      <input
        id="theme-toggle"
        type="checkbox"
        checked={isDarkMode}
        onChange={toggleTheme}
        className="hidden peer"
      />
      <label
        htmlFor="theme-toggle"
        aria-label="Переключить тему"
        className="relative w-[25px] h-[16px] inline-block sm:w-[33px] sm:h-[20px] before:absolute before:inset-0 before:rounded-full before:bg-primary-light before:duration-400 after:bg-background after:absolute after:cursor-pointer after:w-[12px] sm:after:w-[15px] after:aspect-square after:left-[2px] sm:after:left-[3px]  after:bottom-[2px] sm:after:bottom-[2.5px] after:duration-400 after:rounded-full peer-checked:after:translate-x-[9px] sm:peer-checked:after:translate-x-[12.5px] after:shadow-2xs after:shadow-hover"
      ></label>
    </>
  );
};

export default Switch;
