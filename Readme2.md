# React + Vite
# Node version: 18 (nvm use 18)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



# Онлайн редактор кода

## Описание

Это онлайн редактор кода, который поддерживает работу с несколькими языками программирования и позволяет запускать код с имитацией серверного выполнения.

## Установка

1. Клонируйте репозиторий:
    ```bash
    git clone https://github.com/yourusername/my-code-editor.git
    cd my-code-editor
    ```

2. Установите зависимости:
    ```bash
    npm install
    ```

3. Запустите проект:
    ```bash
    npm start
    ```

Проект будет доступен на http://localhost:3000.

## Структура проекта

- `src/`: Исходный код приложения.
- `public/`: Статические файлы.
- `build/`: Скомпилированные файлы для продакшн.

## Технологии

- React.js
- Monaco Editor для подсветки синтаксиса
- ESLint для проверки кода
- Мок-сервер для имитации выполнения кода

## Деплой

Для деплоя используйте сервисы, такие как [Cloudflare Pages](https://pages.cloudflare.com/).


Пример документирования:
/**
* Функция для суммирования двух чисел.
*
* @param {number} a - Первое число
* @param {number} b - Второе число
* @returns {number} - Результат сложения
  */
  const sum = (a, b) => a + b;
  console.log(sum);



  
Для мок-сервера (позже выберу через что делать):
npm install miragejs --save-dev
npm install json-server --save-dev