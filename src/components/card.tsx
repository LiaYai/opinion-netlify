import React, { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { BASE_PATH, ITEMS_PER_LOAD } from '../data/config';

type CardProps = {
  id: string;
  title: string;
  text: string[];
  src: string;
};
const Card: React.FC<CardProps> = ({ id, title, text, src }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = useCallback(() => {
    const scrollPosition = window.scrollY;
    const visibleItems = location.state?.visibleItems || ITEMS_PER_LOAD;
    navigate(`${BASE_PATH}article/${id}`, {
      state: { scrollPosition, visibleItems },
    });
  }, [navigate, location.state, id]);

  return (
    <div
      onClick={handleClick}
      className="flex gap-4 w-full shadow border border-primary rounded-2xl p-4 cursor-pointer active:scale-95 hover:bg-primary/5 overflow-hidden"
    >
      <img
        className="w-1/3 rounded aspect-4/3 object-cover"
        src={src}
        alt={title}
      />
      <div className="w-2/3 max-h-[300px]">
        <h2 className="text-primary text-xl sm:text-2xl font-semibold mb-2">
          {title}
        </h2>
        <ReactMarkdown className="text-sm sm:text-base line-clamp-5 lg:line-clamp-7">
          {text.join(' ')}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default React.memo(Card);
