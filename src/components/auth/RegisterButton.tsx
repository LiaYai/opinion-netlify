import React, { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BASE_PATH } from '../../data/config';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

type RegisterButtonProps = {
  onClick: () => void;
};

const RegisterButton: React.FC<RegisterButtonProps> = ({ onClick }) => {
  const location = useLocation();
  const navigate = useNavigate();
  // const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth < 640);
  //   };

  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  const handleLoginClick = useCallback(() => {
    onClick();
    navigate(`${BASE_PATH}registration`, { state: { background: location } });
  }, [navigate, location, onClick]);

  return (
    // <FontAwesomeIcon
    //   icon={faEnvelope}
    //   aria-label="Войти"
    //   onClick={handleLoginClick}
    //   className="px-4 py-2 hover:text-accent cursor-pointer"
    // />
    <button
      type="button"
      aria-label="Войти"
      onClick={handleLoginClick}
      className={
        'text-button-text font-semibold cursor-pointer ease-in-out transition duration-300 sm:rounded bg-transparent sm:bg-primary-light pl-4 sm:px-2 py-2 sm:py-1 sm:hover:bg-hover sm:hover:outline sm:hover:outline-button-text sm:hover:-outline-offset-2 sm:text-base hover:underline hover:underline-offset-6 hover:decoration-2 hover:decoration-inherit sm:hover:no-underline '
      }
    >
      Регистрация
    </button>
  );
};

export default React.memo(RegisterButton);
