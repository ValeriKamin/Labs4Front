#Front end  — лабораторні роботи

Навчальний проєкт з дисципліни **Front end**.

У цьому репозиторії розміщені лабораторні роботи, пов'язані з розробкою персонального сайту-портфоліо та вивченням основ JavaScript.

## Опис проєкту

Проєкт складається з двох основних частин:

1. **Персональне портфоліо** — багатосторінковий сайт, створений за допомогою HTML та CSS.
2. **Лабораторна робота 4** — окрема сторінка з практичними завданнями JavaScript.

Перші три лабораторні роботи поступово розвивають сайт-портфоліо: від HTML-структури до адаптивної верстки.
Четверта лабораторна робота присвячена основам JavaScript, змінним, умовам, масивам, функціям, об'єктам та рядкам.

## Лабораторна робота 1 — HTML: створення структури сайту

У першій лабораторній роботі було створено базову HTML-структуру персонального портфоліо.

Було реалізовано:

* головну сторінку `index.html`;
* сторінку `about.html` з інформацією про студента;
* сторінку `contacts.html` з контактами та формою;
* семантичні HTML5-теги;
* навігаційне меню;
* таблицю навичок;
* форму зворотного зв'язку;
* зображення та мультимедіа;
* файл `.gitignore`;
* Git-репозиторій з осмисленими комітами.

## Лабораторна робота 2 — CSS: стилізація сторінок

У другій лабораторній роботі сайт було стилізовано за допомогою зовнішнього CSS-файлу.

Було реалізовано:

* підключення `styles.css` до всіх HTML-сторінок;
* загальні стилі сторінки;
* стилізацію хедера, навігації та футера;
* оформлення карток, таблиць і форми;
* використання різних типів CSS-селекторів;
* псевдокласи `:hover`, `:active`, `:focus-visible`, `:nth-child`;
* псевдоелементи `::before` та `::after`;
* використання `position`, `z-index`, `overflow`;
* підключення Google Fonts;
* покращення візуального вигляду сайту.

## Лабораторна робота 3 — адаптивність, Flexbox та CSS Grid

У третій лабораторній роботі сайт було адаптовано для різних пристроїв.

Було реалізовано:

* підхід **Mobile First**;
* адаптацію під екрани від 320px;
* медіа-запити `@media`;
* використання Flexbox для меню, кнопок, футера та списків;
* використання CSS Grid для секцій, карток і контактного блоку;
* CSS-змінні для кольорів, відступів, радіусів та тіней;
* автоматичну темну тему через `prefers-color-scheme`;
* плавні переходи через `transition`;
* CSS-анімації через `@keyframes`;
* підтримку `prefers-reduced-motion`.

## Лабораторна робота 4 — JavaScript: основи та логіка

Четверта лабораторна робота розміщена в окремій папці `lab04`.

У ній реалізовано практичні завдання з JavaScript:

* створення змінних за допомогою `const` та `let`;
* робота з примітивними типами даних;
* явне перетворення типів;
* використання шаблонних рядків;
* порівняння `==` та `===`;
* умовні конструкції `if/else`;
* оператор `switch`;
* тернарний оператор;
* створення та обробка масивів;
* методи масивів `push`, `pop`, `splice`, `find`, `filter`, `map`, `reduce`, `sort`;
* різні способи створення функцій;
* замикання;
* параметри за замовчуванням;
* rest-параметри;
* деструктуризація;
* створення та копіювання об'єктів;
* використання `Object.keys()`, `Object.values()`, `Object.entries()`;
* optional chaining;
* робота з рядками.

Результати виконання JavaScript-коду виводяться:

* у консоль браузера;
* на сторінку `lab04/index.html`.

## Структура проєкту

```text
portfolio/
├── .gitignore
├── README.md
├── VALIDATION.md
├── index.html
├── about.html
├── contacts.html
├── styles.css
├── images/
│   ├── avatar.svg
│   └── workspace.svg
├── audio/
│   └── intro.mp3
├── video/
└── lab04/
    ├── index.html
    └── script.js
```

## Використані технології

* HTML5
* CSS3
* JavaScript
* Flexbox
* CSS Grid
* CSS Variables
* Media Queries
* Git
* GitHub

## Як запустити проєкт

### Перегляд портфоліо

1. Відкрити файл `index.html` у браузері.
2. Перейти між сторінками за допомогою навігаційного меню.

### Перегляд лабораторної роботи 4

1. Відкрити папку `lab04`.
2. Запустити файл `index.html` у браузері.
3. Відкрити консоль браузера за допомогою `F12`.
4. Переглянути результати виконання JavaScript-коду на сторінці та в консолі.

## Робота з Git

Для додавання змін у репозиторій використовуються команди:

```bash
git status
git add .
git commit -m "feat: add laboratory work"
git push
```

Приклади комітів:

```bash
git commit -m "feat: create html portfolio structure"
git commit -m "feat: add css styling"
git commit -m "feat: add responsive layout"
git commit -m "feat: add javascript basics laboratory"
git commit -m "docs: update readme"
```

## Робота програми
<img width="1849" height="938" alt="image" src="https://github.com/user-attachments/assets/597fd391-996c-48e7-a087-612083929d06" />

<img width="1862" height="721" alt="image" src="https://github.com/user-attachments/assets/cdcb46f7-0fc9-4251-b9b7-87837dbb4f0d" />

<img width="1863" height="801" alt="image" src="https://github.com/user-attachments/assets/4649b868-b39a-4a18-8a20-87f333eeff18" />

<img width="1865" height="411" alt="image" src="https://github.com/user-attachments/assets/54c63abb-8aa7-4128-88b2-3d1b795460c6" />

<img width="1863" height="946" alt="image" src="https://github.com/user-attachments/assets/316ddf50-7f97-435a-8f98-8060e90e061c" />

<img width="1211" height="879" alt="image" src="https://github.com/user-attachments/assets/b731f9b3-122b-4bb4-9f93-81246bee986c" />

<img width="1169" height="945" alt="image" src="https://github.com/user-attachments/assets/a28e4901-cde8-4eec-8704-55710a8467be" />

<img width="1185" height="784" alt="image" src="https://github.com/user-attachments/assets/2116d67a-660b-48ff-94fd-573aab46f9d5" />

<img width="1135" height="946" alt="image" src="https://github.com/user-attachments/assets/90941fc2-230f-4ced-b03b-7cb467b1027f" />

<img width="1155" height="937" alt="image" src="https://github.com/user-attachments/assets/caf9e648-7ead-488d-a881-61741c196e31" />

<img width="1219" height="942" alt="image" src="https://github.com/user-attachments/assets/01d2ee14-6151-4029-881d-24d66dfd1eb5" />

<img width="1185" height="944" alt="image" src="https://github.com/user-attachments/assets/1147c74c-accf-49b7-a874-61136761c3b1" />

<img width="1137" height="946" alt="image" src="https://github.com/user-attachments/assets/54fd5ef2-6533-4ed5-b5b3-1cd017589341" />

<img width="1154" height="943" alt="image" src="https://github.com/user-attachments/assets/f0f162e4-d3e6-43e3-af69-8f7dfa2375cb" />

<img width="1174" height="914" alt="image" src="https://github.com/user-attachments/assets/157e869c-5242-4110-a57f-94267c9312b5" />

<img width="1172" height="947" alt="image" src="https://github.com/user-attachments/assets/04f032a7-a117-4f88-9076-62cd83c01d53" />

<img width="1159" height="948" alt="image" src="https://github.com/user-attachments/assets/43009775-00b0-485c-883c-dba9116e7b22" />

<img width="1215" height="188" alt="image" src="https://github.com/user-attachments/assets/a269084e-4a17-4af0-9ead-a3abaa93d9e6" />

## Автор

Валерій Студент

## Примітка

Проєкт створено з навчальною метою для закріплення навичок HTML, CSS, адаптивної верстки, JavaScript та роботи з Git/GitHub.
