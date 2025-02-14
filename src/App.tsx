import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/Footer';
import { Home } from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { Article } from './components/Article';
// import SubscribeForm from './components/auth/SubscribeForm';
import Modal from './components/common/Modal';

import './App.css';

import { BASE_PATH } from './data/config';
import { YandexForm } from './components/YandexForm';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const background = location.state && location.state.background;

  const handleCloseModal = () => {
    navigate(background?.pathname || BASE_PATH, { replace: true });
  };

  return (
    <>
      <Header />
      <main className="flex-grow">
        <Routes location={background || location}>
          <Route path={`${BASE_PATH}`} element={<Home />} />
          <Route path={`${BASE_PATH}about`} element={<About />} />
          <Route path={`${BASE_PATH}contact`} element={<Contact />} />
          <Route
            path={`${BASE_PATH}article/:articleId`}
            element={<Article />}
          />
          <Route
            path={`${BASE_PATH}registration`}
            // element={<SubscribeForm onSuccess={handleCloseModal} />}
            element={
              <Modal title={'Регистрация'} onClose={handleCloseModal}>
                <YandexForm />
                <p className="text-sm text-gray-800 text-center">
                  Нажимая на кнопку, вы соглашаетесь с{' '}
                  <Link
                    to={`${BASE_PATH}privacy-policy`}
                    className="text-blue-600 hover:underline"
                  >
                    Политикой конфиденциальности
                  </Link>
                </p>
              </Modal>
            }
          />
          <Route
            path={`${BASE_PATH}privacy-policy`}
            element={<PrivacyPolicyPage />}
          />
          <Route path={'*'} element={<NotFound />} />
        </Routes>
        {background && (
          <Routes>
            <Route
              path={`${BASE_PATH}registration`}
              element={
                <Modal title={'Регистрация'} onClose={handleCloseModal}>
                  {/* <SubscribeForm onSuccess={handleCloseModal} /> */}
                  <YandexForm />
                  <p className="text-sm text-gray-800 text-center">
                    Нажимая на кнопку, вы соглашаетесь с{' '}
                    <Link
                      to={`${BASE_PATH}privacy-policy`}
                      className="text-blue-600 hover:underline"
                    >
                      Политикой конфиденциальности
                    </Link>
                  </p>
                </Modal>
              }
            />
          </Routes>
        )}
      </main>
      <Footer />
    </>
  );
};

export default App;
