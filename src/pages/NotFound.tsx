import React from 'react';
import { NavLink } from 'react-router-dom';
import { BASE_PATH } from '../data/config';

const NotFound: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full text-center p-4">
    <h1 className="text-4xl sm:text-6xl font-bold text-accent mb-4">404</h1>
    <p className="text-xl sm:text-2xl text-gray-700 mb-8">
      Страница не найдена
    </p>
    <NavLink
      to={`${BASE_PATH}`}
      className="text-lg sm:text-xl text-primary font-semibold hover:underline"
      aria-label="Вернуться на главную страницу"
    >
      Вернуться на главную
    </NavLink>
  </div>
);

export default React.memo(NotFound);
