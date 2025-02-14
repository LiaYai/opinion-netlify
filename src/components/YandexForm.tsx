import { useEffect } from 'react';

export const YandexForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://forms.yandex.ru/_static/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe
      src="https://forms.yandex.ru/u/67ad003050569023c943094a/?iframe=1"
      name="ya-form-67ad003050569023c943094a"
      allow="storage-access"
      className="w-full"
    ></iframe>
  );
};
