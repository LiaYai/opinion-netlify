import React, { lazy, Suspense, useMemo } from 'react';
import { articles } from '../data/articles';

const LazyCard = lazy(() => import('./Card'));

type CardListProps = {
  visibleItems: number;
};

export const CardList: React.FC<CardListProps> = ({ visibleItems }) => {
  const currentArticles = useMemo(
    () => articles.slice(0, visibleItems),
    [visibleItems]
  );

  return (
    <div className="flex flex-col gap-4 sm:gap-6">
      {currentArticles.map((card) => (
        <Suspense key={card.id} fallback={<div>Загрузка карточки...</div>}>
          <LazyCard {...card} />
        </Suspense>
      ))}
    </div>
  );
};
