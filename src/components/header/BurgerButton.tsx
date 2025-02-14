import React from 'react';

interface BurgerButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export const BurgerMenu: React.FC<BurgerButtonProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      aria-label="Toggle menu"
      onClick={onClick}
      className="sm:hidden p-2 cursor-pointer"
    >
      <div className="space-y-1">
        <div className="w-7 h-0.5 bg-accent-heading"></div>
        <div className="w-7 h-0.5 bg-accent-heading"></div>
        <div className="w-7 h-0.5 bg-accent-heading"></div>
      </div>
    </button>
  );
};
