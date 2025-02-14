import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={`bg-primary-light text-button-text font-semibold px-4 py-2 rounded cursor-pointer hover:bg-hover hover:outline hover:outline-button-text hover:-outline-offset-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-opacity-75 transition duration-300 ease-in-out ${className}`}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
