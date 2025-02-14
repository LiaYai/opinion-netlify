import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';

const Contact: React.FC = () => (
  <section className="max-w-4xl mx-auto p-6">
    <article>
      <p className="text-base sm:text-lg my-2">
        <b>Наш телефон</b> – мы не дадим. Мы не хотим, чтобы нам звонили всякие
        безобразники, приглашая нас на бесплатное медицинское
        освидетельствование в клинику доктора Грабового по федеральной программе
        защиты пенсионеров от радиационного излучения китайских телефонов.
      </p>

      <p className="text-base sm:text-lg my-2">
        Наш адрес мы не укажем, но возможно приедем к вам сами, если вы будете
        безобразничать.
      </p>

      <p className="text-base sm:text-lg my-2">
        <b>Нашу страницу в социальных сетях</b> вы легко найдёте, если будет
        такое желание.
      </p>

      <p className="text-base sm:text-lg my-2">
        <b>Наша электронная почта</b> вам не нужна, мы вам обязательно ответим,
        если вы оставите дельный комментарий в нашем телеграмм-канале.
      </p>

      <h3 className="text-xl sm:text-2xl text-accent-heading my-5 font-bold">
        Наш телеграм:
      </h3>
      <p className="text-base sm:text-lg my-2 flex items-center text-primary ">
        <FontAwesomeIcon icon={faTelegram} className="mr-2" />
        <a
          href="https://t.me/mind_autonomy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
          aria-label="Автономия разума в Telegram"
        >
          Автономия разума
        </a>
      </p>
      <p className="text-base sm:text-lg my-2 flex items-center text-primary">
        <FontAwesomeIcon icon={faTelegram} className="mr-2" />
        <a
          href="https://t.me/mind_autonomy_practicum"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
          aria-label="Автономия разума. Практикум в Telegram"
        >
          Автономия разума. Практикум
        </a>
      </p>
    </article>
  </section>
);

export default React.memo(Contact);
