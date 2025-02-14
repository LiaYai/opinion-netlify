import { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { CardList } from '../components/CardList';
import Button from '../components/common/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import { articles } from '../data/articles';
import { ITEMS_PER_LOAD } from '../data/config';

export const Home = () => {
  const location = useLocation();
  const [visibleItems, setVisibleItems] = useState<number>(
    location.state?.visibleItems || ITEMS_PER_LOAD
  );

  useEffect(() => {
    const scrollPosition = location.state?.scrollPosition || top;
    window.scrollTo(0, scrollPosition);
    if (location.state?.visibleItems) {
      setVisibleItems(location.state.visibleItems);
    }
  }, [location]);

  const handleScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleLoadMore = useCallback(() => {
    setVisibleItems((prev) => prev + ITEMS_PER_LOAD);
    location.state = { visibleItems: visibleItems + ITEMS_PER_LOAD };
  }, [location, visibleItems]);

  return (
    <div className="max-w-7xl flex flex-col p-5 m-auto">
      <CardList visibleItems={visibleItems} />
      {visibleItems < articles.length && (
        <Button
          onClick={handleLoadMore}
          type="button"
          aria-label="Загрузить еще"
          className="w-full mt-2 sm:mt-4"
        >
          Загрузить еще
        </Button>
      )}
      {visibleItems > ITEMS_PER_LOAD && (
        <Button
          onClick={handleScrollToTop}
          type="button"
          aria-label="Прокрутить наверх"
          className="fixed bottom-29 sm:bottom-22 right-5 z-39"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </Button>
      )}
    </div>
  );
};
