# Описание проекта

Сайт включает в себя несколько страниц: главную страницу со списком статей, страницу "О нас", страницу с контактами и страницу "Политика конфиденциальности".

## Что было сделано

[Deploy на netlify](https://mindautonomy.netlify.app/)

- ### Адаптивная вёрстка
Реализована адаптивная вёрстка с использованием **Tailwind CSS**, которая корректно отображается на всех устройствах (десктопы, планшеты, мобильные устройства).

- ### Разработка страниц
Разработаны основные страницы сайта: главная страница со списком статей, страница "О нас", страница "Контакты" и страница "Политика конфиденциальности". Все страницы созданы без использования готового макета.

- ### Форма подписки
Cоздана всплывающая форма подписки с валидацией полей (имя и email) с использованием библиотеки **react-hook-form**. Данные сохраняются в **Google Таблицу** через API. 

- ### Переключение тем
Добавлено переключение между светлой и тёмной темами. Учитываются предпочтения пользователя (настройки системы), а также предусмотрена возможность ручного выбора темы.

- ### Бургер-меню
Для мобильной версии сайта реализовано бургер-меню, которое обеспечивает удобную навигацию на небольших экранах.

## Стек технологий
- **React** — библиотека для построения пользовательских интерфейсов.
- **TypeScript** — язык программирования для добавления статической типизации.
- **Vite** — инструмент для сборки проекта, обеспечивающий высокую скорость разработки.
- **Tailwind CSS** — CSS-фреймворк для создания адаптивных и современных интерфейсов.
- **Интеграция с Google Таблицей** через API для обработки данных формы подписки.

## Установка и запуск проекта

1. Установите зависимости:
  ```bash
  npm install
  ```
2. Запустите проект:
  ```bash
  npm run dev
  ```
