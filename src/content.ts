export type Lang = "en" | "ru";
export type Localized = Record<Lang, string>;
export type Project = {
  id: string;
  name: string;
  category: Localized;
  summary: Localized;
  image: string;
  live: string;
  repo: string;
  stack: string[];
  brief: Localized;
  implementation: Localized[];
  scope: Localized;
};

export const projects: Project[] = [
  {
    id: "stayline",
    name: "Stayline",
    category: { en: "Booking experience", ru: "Сервис бронирования" },
    summary: {
      en: "From finding the right space to choosing dates and completing a booking.",
      ru: "От поиска подходящего пространства до выбора дат и оформления бронирования.",
    },
    image: "stayline-screen.webp",
    live: "https://shevdevworks.github.io/stayline/",
    repo: "https://github.com/shevdevworks/stayline",
    stack: ["React", "TypeScript", "Vite"],
    brief: {
      en: "Make a multi-step booking feel manageable on a phone and a desktop, with clear prices, available dates and useful feedback at every step.",
      ru: "Сделать многошаговое бронирование удобным на телефоне и компьютере: понятные цены, доступные даты и обратная связь на каждом шаге.",
    },
    implementation: [
      {
        en: "Search and filters stored in the URL, so a selection can be shared or reopened.",
        ru: "Поиск и фильтры сохраняются в URL: подборку можно отправить или открыть повторно.",
      },
      {
        en: "A custom keyboard-accessible date picker and a three-step form with validation.",
        ru: "Собственный календарь с управлением с клавиатуры и форма из трёх шагов с проверкой полей.",
      },
      {
        en: "Loading, empty, error and success states, plus layouts for small screens.",
        ru: "Состояния загрузки, пустой выдачи, ошибки и успеха, а также адаптация под небольшие экраны.",
      },
    ],
    scope: {
      en: "Independent frontend case study. Venue data and booking responses are simulated; no real reservations are made.",
      ru: "Личный frontend-проект. Данные площадок и ответы бронирования имитируются; реальные бронирования не создаются.",
    },
  },
  {
    id: "emquad",
    name: "Emquad",
    category: { en: "Creative web app", ru: "Творческое веб-приложение" },
    summary: {
      en: "A phrase becomes a typographic poster you can edit, save, share and download.",
      ru: "Фраза превращается в типографический постер: редактируй, сохраняй, делись и скачивай.",
    },
    image: "emquad-screen.webp",
    live: "https://emquad.vercel.app/",
    repo: "https://github.com/shevdevworks/emquad",
    stack: ["Next.js", "TypeScript", "Postgres"],
    brief: {
      en: "Turn a short phrase into a composition shaped by the text itself, and keep the preview, saved poster and exported file consistent.",
      ru: "Превратить короткую фразу в композицию, зависящую от самого текста, и сохранить одинаковый результат в превью, сохранённом постере и файле.",
    },
    implementation: [
      {
        en: "Five composition modes, with immediate previews rendered in the browser.",
        ru: "Пять вариантов композиции с моментальным предпросмотром в браузере.",
      },
      {
        en: "One TypeScript renderer used for SVG previews, exports and social sharing images.",
        ru: "Один TypeScript-рендерер для SVG-превью, экспорта и изображений для соцсетей.",
      },
      {
        en: "Saved posters in Postgres, permanent links and PNG / SVG downloads.",
        ru: "Постеры в Postgres, постоянные ссылки и скачивание PNG / SVG.",
      },
    ],
    scope: {
      en: "Independent product project with a database-backed saving flow. Built as an exploration of typography and web engineering.",
      ru: "Личный продуктовый проект с сохранением в базу данных. Исследование типографики и веб-разработки.",
    },
  },
  {
    id: "cybergear",
    name: "CyberGear",
    category: { en: "E-commerce frontend", ru: "Интерфейс интернет-магазина" },
    summary: {
      en: "A product catalog with useful filters, a persistent cart and a guided checkout.",
      ru: "Каталог с фильтрами, сохраняемой корзиной и понятным оформлением заказа.",
    },
    image: "cyber-gear-screen.webp",
    live: "https://shevdevworks.github.io/cyber-gear/",
    repo: "https://github.com/shevdevworks/cyber-gear",
    stack: ["JavaScript", "CSS", "State management"],
    brief: {
      en: "Build the shopping flow for a peripherals store: find a product, compare options, manage a cart and enter delivery details.",
      ru: "Построить сценарий покупки в магазине периферии: найти товар, сравнить варианты, собрать корзину и указать доставку.",
    },
    implementation: [
      {
        en: "Search, sorting and combined category, connectivity and price filters.",
        ru: "Поиск, сортировка и совместные фильтры по категории, подключению и цене.",
      },
      {
        en: "A shared state store, cart persistence and promo-code calculations.",
        ru: "Общее хранилище состояния, сохранение корзины и расчёт промокодов.",
      },
      {
        en: "Validated checkout fields and keyboard-operable custom controls.",
        ru: "Проверка полей оформления заказа и управление кастомными элементами с клавиатуры.",
      },
    ],
    scope: {
      en: "Frontend demo with a mock catalog and simulated checkout. No real payment or order processing.",
      ru: "Frontend-демо с тестовым каталогом и имитацией оформления заказа. Реальные платежи и обработка заказов не подключены.",
    },
  },
  {
    id: "apex",
    name: "ApexSaaS",
    category: { en: "SaaS landing page", ru: "Лендинг SaaS-продукта" },
    summary: {
      en: "An animated product story with an interactive calculator to explore pricing.",
      ru: "Анимированная презентация продукта с интерактивным калькулятором тарифов.",
    },
    image: "apex-screen.webp",
    live: "https://shevdevworks.github.io/apex-saas/",
    repo: "https://github.com/shevdevworks/apex-saas",
    stack: ["HTML / CSS", "JavaScript", "GSAP"],
    brief: {
      en: "Present an automation platform clearly, use motion to explain the interface, and help visitors explore plans for their team size.",
      ru: "Понятно представить платформу автоматизации, показать интерфейс через анимацию и помочь выбрать тариф по размеру команды.",
    },
    implementation: [
      {
        en: "A coordinated hero animation and scroll-driven sequences using GSAP.",
        ru: "Согласованная анимация первого экрана и сценарии при прокрутке на GSAP.",
      },
      {
        en: "A working pricing calculator with team size and monthly / yearly billing.",
        ru: "Рабочий калькулятор с размером команды и помесячной / годовой оплатой.",
      },
      {
        en: "Reduced-motion support and a fallback that keeps content visible if the animation library fails.",
        ru: "Режим уменьшенной анимации и резервный сценарий, сохраняющий контент видимым при сбое библиотеки.",
      },
    ],
    scope: {
      en: "Landing page concept for a fictional brand. Product metrics, companies and testimonials inside the demo are illustrative.",
      ru: "Концепт лендинга вымышленного бренда. Показатели, компании и отзывы внутри демо приведены для иллюстрации.",
    },
  },
  {
    id: "trendify",
    name: "Trendify",
    category: { en: "Analytics dashboard", ru: "Панель аналитики" },
    summary: {
      en: "Sales data becomes readable through linked charts, filters and exportable reports.",
      ru: "Данные продаж становятся понятнее благодаря связанным графикам, фильтрам и экспорту отчётов.",
    },
    image: "trendify-screen.webp",
    live: "https://shevdevworks.github.io/trendify/",
    repo: "https://github.com/shevdevworks/trendify",
    stack: ["JavaScript", "SVG charts", "CSS"],
    brief: {
      en: "Make a dense marketplace dashboard easy to explore, keeping charts, totals and transaction rows in sync as filters change.",
      ru: "Сделать насыщенную панель аналитики удобной: синхронизировать графики, показатели и строки операций при смене фильтров.",
    },
    implementation: [
      {
        en: "Custom SVG charts with tooltips and a clickable platform breakdown.",
        ru: "Собственные SVG-графики с подсказками и выбором платформы в диаграмме.",
      },
      {
        en: "Shared filtering logic for dashboard totals, transactions and CSV exports.",
        ru: "Общая логика фильтров для показателей, операций и CSV-экспорта.",
      },
      {
        en: "Recoverable loading errors, protection from out-of-order responses and mobile controls.",
        ru: "Повторная загрузка при ошибке, защита от устаревших ответов и мобильные элементы управления.",
      },
    ],
    scope: {
      en: "Dashboard concept using mock data. Marketplace accounts and real sales data are not connected.",
      ru: "Концепт панели с тестовыми данными. Аккаунты маркетплейсов и реальные продажи не подключены.",
    },
  },
];

export const content = {
  en: {
    nav: ["Work", "Services", "About"],
    talk: "Let’s talk",
    menu: "Open menu",
    closeMenu: "Close menu",
    skip: "Skip to content",
    status: "Open to freelance projects",
    location: "Independent frontend developer / Kyiv, Ukraine",
    stamp: "Design → Development",
    name: "Ivan",
    role: "Frontend developer",
    city: "Kyiv, Ukraine",
    independent: "Independent",
    headline: ["Your idea.", "Beautifully built."],
    intro:
      "I’m Ivan, the developer behind ShevDevWorks. I turn designs and ideas into websites and web interfaces that feel right, on every screen.",
    viewWork: "Explore my work",
    discuss: "Tell me about your project",
    heroNote: "Landing pages, React apps and the details in between.",
    preview: "Explore a project",
    previewNote: "A closer look at what I build",
    projectSelect: "Choose a project to preview",
    openCase: "Explore this project",
    techNote: "Tools I work with",
    workTitle: "Proof in the details.",
    workIntro:
      "Booking flows, storefronts and creative tools. Five independent projects, built to be explored.",
    selectedWork: "Selected work",
    scroll: "Scroll to explore",
    desktop: "Desktop experience",
    mobile: "Made for every screen",
    serviceLink: "See a related project",
    serviceIntro: "From the first page to the final interaction.",
    detailLabel: "Explore the case study",
    workCount: "05 projects",
    serviceCaption: "A few ways I can help",
    aboutStatement: "The small things\nmake the experience.",
    aboutLabel: "The person behind the work",
    aboutPrinciples: [
      "Care in the details",
      "Clear communication",
      "Code you can build on",
    ],
    contactEyebrow: "Have something in mind?",
    contactHint: "Let’s give your idea a place on the web.",
    filters: ["All work", "Web apps", "Websites"],
    case: "View project details",
    live: "Live demo",
    code: "Source code",
    caseLabel: "Independent project",
    closeCase: "Close project details",
    brief: "The challenge",
    implementation: "What I built",
    scope: "Project scope",
    similar: "Have a similar project?",
    servicesTitle: "What do you need built?",
    servicesIntro:
      "A new website, a more useful interface, or a hand with something already in progress.",
    services: [
      {
        title: "Websites & landing pages",
        text: "Responsive business sites and campaign pages, built from your design or shaped around your content.",
        tags: "HTML / CSS · React · GSAP",
        icon: "window",
      },
      {
        title: "Web apps & interfaces",
        text: "React interfaces with forms, filters, dashboards and the loading and error states that make them usable.",
        tags: "React · TypeScript · API integration",
        icon: "layers",
      },
      {
        title: "E-commerce frontends",
        text: "Product catalogs, shopping carts and checkout interfaces. Integration scope agreed around your platform.",
        tags: "Catalogs · Cart flows · Checkout UI",
        icon: "bag",
      },
      {
        title: "Fixes & improvements",
        text: "Mobile layout issues, unfinished features, awkward interactions or a design that needs a careful refresh.",
        tags: "Responsive layouts · UI fixes · Motion",
        icon: "adjust",
      },
    ],
    aboutTitle: "One developer.\nA direct conversation.",
    aboutText:
      "ShevDevWorks is my independent development practice. You work directly with me, from understanding the brief to reviewing the finished interface.",
    aboutText2:
      "I care about the parts people notice: readable layouts, useful feedback and interactions that behave as expected. Behind that, I keep the code structured so the next change is easier.",
    aboutLink: "Take a look at my GitHub",
    aboutSmall: "Based in Kyiv. Working remotely.",
    processTitle: "From your brief to the browser.",
    steps: [
      {
        title: "Get the scope right",
        text: "We go through your goals, designs and requirements, then agree on deliverables and a timeline.",
      },
      {
        title: "Build & keep you involved",
        text: "I build the interface and share progress, so you can check the direction before the final handoff.",
      },
      {
        title: "Review & hand over",
        text: "We check the key flows and screen sizes. You receive the source code and setup instructions.",
      },
    ],
    contactTitle: "What are you\nworking on?",
    contactText:
      "Send a design, a brief or just the idea. I’ll help you work out the scope and a sensible next step.",
    emailLabel: "Email me",
    telegramLabel: "Message on Telegram",
    copy: "Copy email address",
    copied: "Email copied",
    copyFailed: "Copy unavailable. Use the email link.",
    briefTitle: "Start with a few details",
    serviceLabel: "What do you need?",
    serviceOptions: [
      "A website or landing page",
      "A web app or interface",
      "An e-commerce frontend",
      "Fixes or improvements",
      "Something else",
    ],
    messageLabel: "A little about the project",
    placeholder:
      "What are you building? Add a link to a design or an existing site, if you have one.",
    send: "Open email draft",
    formNote:
      "Opens your email app with these details. Nothing is sent automatically.",
    draftReady:
      "Your email draft is ready. If your email app didn’t open, use the email link on the left.",
    footer: "Frontend development, thoughtfully done.",
    backTop: "Back to top",
    noResults: "No projects in this category.",
  },
  ru: {
    nav: ["Проекты", "Услуги", "Обо мне"],
    talk: "Обсудить проект",
    menu: "Открыть меню",
    closeMenu: "Закрыть меню",
    skip: "Перейти к содержимому",
    status: "Открыт к фриланс-проектам",
    location: "Независимый frontend-разработчик / Киев, Украина",
    stamp: "Дизайн → Разработка",
    name: "Иван",
    role: "Frontend-разработчик",
    city: "Киев, Украина",
    independent: "Фриланс",
    headline: ["Ваша идея.", "Готовый продукт."],
    intro:
      "Я Иван, разработчик за ShevDevWorks. Превращаю дизайн и идеи в сайты и веб-интерфейсы, которыми удобно пользоваться на любом экране.",
    viewWork: "Посмотреть работы",
    discuss: "Рассказать о проекте",
    heroNote: "Лендинги, React-приложения и всё, что делает их удобными.",
    preview: "Посмотреть проект",
    previewNote: "Ближе к тому, что я создаю",
    projectSelect: "Выберите проект для просмотра",
    openCase: "Подробнее о проекте",
    techNote: "Мои инструменты",
    workTitle: "Качество — в деталях.",
    workIntro:
      "Бронирование, магазины и творческие инструменты. Пять личных проектов, которые можно изучить в деле.",
    selectedWork: "Избранные работы",
    scroll: "Листайте дальше",
    desktop: "Версия для компьютера",
    mobile: "Удобно на любом экране",
    serviceLink: "Посмотреть похожий проект",
    serviceIntro: "От первой страницы до последнего взаимодействия.",
    detailLabel: "Подробнее о работе",
    workCount: "05 проектов",
    serviceCaption: "Чем я могу помочь",
    aboutStatement: "Детали создают\nвпечатление.",
    aboutLabel: "Кто стоит за проектами",
    aboutPrinciples: [
      "Внимание к деталям",
      "Понятное общение",
      "Код с заделом на развитие",
    ],
    contactEyebrow: "Есть идея?",
    contactHint: "Давайте найдём ей место в интернете.",
    filters: ["Все работы", "Веб-приложения", "Сайты"],
    case: "Подробнее о проекте",
    live: "Открыть демо",
    code: "Исходный код",
    caseLabel: "Личный проект",
    closeCase: "Закрыть описание проекта",
    brief: "Задача",
    implementation: "Что я реализовал",
    scope: "Границы проекта",
    similar: "Нужен похожий проект?",
    servicesTitle: "Что нужно разработать?",
    servicesIntro:
      "Новый сайт, удобный интерфейс или помощь с проектом, который уже в работе.",
    services: [
      {
        title: "Сайты и лендинги",
        text: "Адаптивные сайты бизнеса и посадочные страницы по вашему дизайну или на основе вашего контента.",
        tags: "HTML / CSS · React · GSAP",
        icon: "window",
      },
      {
        title: "Веб-приложения и интерфейсы",
        text: "React-интерфейсы с формами, фильтрами, панелями данных и понятными состояниями загрузки и ошибок.",
        tags: "React · TypeScript · Подключение API",
        icon: "layers",
      },
      {
        title: "Интерфейсы магазинов",
        text: "Каталоги, корзины и оформление заказов. Объём интеграций согласуем с учётом вашей платформы.",
        tags: "Каталоги · Корзины · Оформление заказа",
        icon: "bag",
      },
      {
        title: "Доработки и исправления",
        text: "Проблемы мобильной верстки, незаконченные функции, неудобные сценарии или аккуратное обновление дизайна.",
        tags: "Адаптивность · Доработки UI · Анимация",
        icon: "adjust",
      },
    ],
    aboutTitle: "Один разработчик.\nПрямое общение.",
    aboutText:
      "ShevDevWorks — мой независимый бренд. Вы общаетесь со мной напрямую: от разбора задачи до проверки готового интерфейса.",
    aboutText2:
      "Мне важны детали, которые замечает пользователь: читаемая верстка, понятная обратная связь и предсказуемое поведение. Код держу организованным, чтобы следующие изменения было проще внести.",
    aboutLink: "Посмотреть мой GitHub",
    aboutSmall: "В Киеве. Работаю удалённо.",
    processTitle: "От вашей задачи до готового сайта.",
    steps: [
      {
        title: "Разбираемся с задачей",
        text: "Обсуждаем цели, дизайн и требования. Согласовываем объём работы, результат и сроки.",
      },
      {
        title: "Разрабатываю и показываю",
        text: "Собираю интерфейс и делюсь прогрессом, чтобы вы могли проверить направление до финальной сдачи.",
      },
      {
        title: "Проверяем и передаём",
        text: "Проверяем основные сценарии и размеры экранов. Вы получаете исходный код и инструкции по запуску.",
      },
    ],
    contactTitle: "Над чем вы\nработаете?",
    contactText:
      "Пришлите дизайн, ТЗ или просто идею. Помогу определить объём работы и следующий шаг.",
    emailLabel: "Написать на почту",
    telegramLabel: "Написать в Telegram",
    copy: "Скопировать адрес почты",
    copied: "Почта скопирована",
    copyFailed: "Копирование недоступно. Нажмите ссылку почты.",
    briefTitle: "Начнём с пары деталей",
    serviceLabel: "Что вам нужно?",
    serviceOptions: [
      "Сайт или лендинг",
      "Веб-приложение или интерфейс",
      "Интерфейс интернет-магазина",
      "Доработки и исправления",
      "Другая задача",
    ],
    messageLabel: "Немного о проекте",
    placeholder:
      "Что нужно разработать? Если есть дизайн или действующий сайт, добавьте ссылку.",
    send: "Открыть черновик письма",
    formNote:
      "Откроет почтовое приложение с этими данными. Автоматической отправки нет.",
    draftReady:
      "Черновик готов. Если почтовое приложение не открылось, воспользуйтесь ссылкой почты слева.",
    footer: "Frontend-разработка с вниманием к деталям.",
    backTop: "Наверх",
    noResults: "В этой категории пока нет проектов.",
  },
};
