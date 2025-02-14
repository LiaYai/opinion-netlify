import React, { useEffect, useMemo } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import Button from './common/Button';
import NotFound from '../pages/NotFound';

import { articles } from '../data/articles';
import { BASE_PATH, ITEMS_PER_LOAD } from '../data/config';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export const Article: React.FC = () => {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const article = useMemo(
    () => articles.find((article) => article.id === articleId),
    [articleId]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!article) {
    return <NotFound />;
  }

  const { title, text, src } = article;

  const handleBackClick = () => {
    try {
      navigate(`${BASE_PATH}`, {
        state: {
          scrollPosition: location.state?.scrollPosition,
          visibleItems: location.state?.visibleItems || ITEMS_PER_LOAD,
        },
      });
    } catch (error) {
      console.error('Error navigating back:', error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 min-h-[600px]">
      <h1 className="font-inter font-bold text-primary text-xl sm:text-2xl text-center mb-3.5">
        {title}
      </h1>
      <img className="float-right rounded w-1/3" src={src} alt={title} />
      {text.map((paragraph, index) => (
        <ReactMarkdown
          key={index}
          className="text-base indent-8 not-last:mb-1.5"
        >
          {paragraph}
        </ReactMarkdown>
      ))}
      <Button onClick={handleBackClick}>
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
        Назад к списку статей
      </Button>
    </div>
  );
};
