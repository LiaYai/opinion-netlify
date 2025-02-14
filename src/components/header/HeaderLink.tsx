import React from 'react';
import { NavLink } from 'react-router-dom';

interface HeaderLinkProps extends React.PropsWithChildren {
  path: string;
  onClick: () => void;
}

export const HeaderLink: React.FC<HeaderLinkProps> = ({
  children,
  path,
  onClick,
}) => {
  return (
    <NavLink
      to={path}
      onClick={onClick}
      className={({ isActive }) =>
        `block w-full pl-4 sm:pl-0 py-2 sm:py-0 tracking-wide decoration-transparent hover:underline hover:underline-offset-6 hover:decoration-2 hover:decoration-inherit transition-colors duration-300 ${isActive ? 'text-accent pointer-events-none' : ''}`
      }
    >
      {children}
    </NavLink>
  );
};
