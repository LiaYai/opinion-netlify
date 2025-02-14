import React from 'react';
import { BASE_PATH } from '../../data/config';
import { NavLink } from 'react-router-dom';
import logo from '/logo.png';

export const Logo: React.FC = () => {
  return (
    <NavLink
      to={`${BASE_PATH}`}
      className="w-16 aspect-square sm:w-22"
      aria-label="На главную"
    >
      <img src={logo} alt="logo" className="w-full object-contain" />
    </NavLink>
  );
};
