import React, { useState, useEffect, useCallback } from 'react';
import { BASE_PATH } from '../../data/config';
import { ThemeToggle } from './ThemeToggle';
import { HeaderLink } from './HeaderLink';
import { Logo } from './Logo';
import { BurgerMenu } from './BurgerButton';
import RegisterButton from '../auth/RegisterButton';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <header className="relative w-full flex justify-between flex-row items-center h-fit px-4 py-2 sm:px-7 bg-primary/5">
      <ThemeToggle />
      <Logo />

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-overlay sm:hidden z-40"
          onClick={closeMenu}
        />
      )}

      <nav
        className={`fixed z-50 sm:static font-inter top-0 p-4 sm:p-0 right-0 h-screen sm:h-auto w-64 sm:w-auto bg-primary-dark text-xl text-button-text sm:bg-transparent shadow-lg sm:shadow-none transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full sm:translate-x-0'
        } sm:flex flex-col sm:flex-row gap-4 justify-between items-baseline sm:text-primary font-semibold py-2.5 sm:text-lg `}
      >
        <HeaderLink path={`${BASE_PATH}`} onClick={closeMenu}>
          Главная
        </HeaderLink>
        <HeaderLink path={`${BASE_PATH}about`} onClick={closeMenu}>
          О нас
        </HeaderLink>
        <HeaderLink path={`${BASE_PATH}contact`} onClick={closeMenu}>
          Контакты
        </HeaderLink>
        <RegisterButton onClick={closeMenu} />
      </nav>

      <BurgerMenu onClick={toggleMenu} />
    </header>
  );
};

export default React.memo(Header);
