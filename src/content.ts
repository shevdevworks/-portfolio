export type Lang = "en" | "ru";
export type Localized = Record<Lang, string>;
export type Project = {
  id: string;
  name: string;
  title: Localized;
  category: Localized;
  group: "apps" | "websites" | "bots";
  enquiry: number;
  summary: Localized;
  live?: string;
  repo?: string;
  stack: string[];
  brief: Localized;
  implementation: Localized[];
  benefits: Localized[];
  scope: Localized;
};

export const projects: Project[] = [
  {
    "id": "stayline",
    "name": "Stayline",
    "category": {
      "en": "Booking experience",
      "ru": "Сервис бронирования"
    },
    "summary": {
      "en": "Let customers find a suitable option, choose a date and send a booking request from any device.",
      "ru": "Помогу клиентам найти подходящий вариант, выбрать дату и оставить заявку на бронирование с любого устройства."
    },
    "live": "https://shevdevworks.github.io/stayline/",
    "repo": "https://github.com/shevdevworks/stayline",
    "stack": [
      "React",
      "TypeScript",
      "Vite"
    ],
    "brief": {
      "en": "For studios, rentals and appointment-based services where arranging every booking in messages takes too much back-and-forth.",
      "ru": "Для студий, аренды и услуг по записи, где каждое бронирование приходится долго согласовывать в переписке."
    },
    "implementation": [
      {
        "en": "A searchable catalog of spaces or services with the filters your customers need.",
        "ru": "Каталог площадок или услуг с поиском и нужными клиенту фильтрами."
      },
      {
        "en": "Date selection, price calculation and a clear step-by-step request form.",
        "ru": "Выбор даты, расчёт стоимости и понятная пошаговая форма заявки."
      },
      {
        "en": "Connection to your availability or booking API, with integration scope agreed before development.",
        "ru": "Подключение к вашему API расписания или бронирования: объём интеграции согласуем до разработки."
      }
    ],
    "scope": {
      "en": "Stayline is a personal example of the interface. Availability and bookings are simulated; a live booking system is a separate integration.",
      "ru": "Stayline — личный пример интерфейса. Доступность и бронирования имитируются; рабочую систему бронирования подключаем отдельно."
    },
    "title": {
      "en": "Booking & appointments",
      "ru": "Бронирование и запись"
    },
    "group": "apps",
    "enquiry": 1,
    "benefits": [
      {
        "en": "Date selection",
        "ru": "Выбор даты"
      },
      {
        "en": "Request forms",
        "ru": "Заявки"
      },
      {
        "en": "Price calculation",
        "ru": "Расчёт стоимости"
      }
    ]
  },
  {
    "id": "emquad",
    "name": "Emquad",
    "category": {
      "en": "Creative web app",
      "ru": "Творческое веб-приложение"
    },
    "summary": {
      "en": "Give customers a tool to customise a result, see changes immediately and save or download their work.",
      "ru": "Сделаю инструмент, в котором клиент сможет настроить результат, сразу увидеть изменения и сохранить или скачать свою работу."
    },
    "live": "https://emquad.vercel.app/",
    "repo": "https://github.com/shevdevworks/emquad",
    "stack": [
      "Next.js",
      "TypeScript",
      "Postgres"
    ],
    "brief": {
      "en": "For products that need more than a static page: a visual editor, a configurator or a tool customers can use themselves.",
      "ru": "Для продуктов, которым нужен визуальный редактор, конфигуратор или инструмент для самостоятельной работы клиента."
    },
    "implementation": [
      {
        "en": "An editor or configurator with an immediate preview of the result.",
        "ru": "Редактор или конфигуратор с моментальным предпросмотром результата."
      },
      {
        "en": "Saving results to a database and reopening them through a shareable link.",
        "ru": "Сохранение результатов в базе данных и доступ к ним по ссылке."
      },
      {
        "en": "File exports and an interface adapted to your workflow and screen sizes.",
        "ru": "Скачивание файлов и интерфейс под ваш сценарий работы и разные экраны."
      }
    ],
    "scope": {
      "en": "Emquad is a personal poster editor with database storage, shareable links and PNG / SVG downloads. It shows how this kind of interaction can work.",
      "ru": "Emquad — личный редактор постеров с базой данных, ссылками на результат и скачиванием PNG / SVG. Показывает один из вариантов такого взаимодействия."
    },
    "title": {
      "en": "Interactive web tools",
      "ru": "Веб-инструменты"
    },
    "group": "apps",
    "enquiry": 3,
    "benefits": [
      {
        "en": "Live preview",
        "ru": "Предпросмотр"
      },
      {
        "en": "Saving",
        "ru": "Сохранение"
      },
      {
        "en": "File exports",
        "ru": "Экспорт файлов"
      }
    ]
  },
  {
    "id": "cybergear",
    "name": "CyberGear",
    "category": {
      "en": "E-commerce frontend",
      "ru": "Интерфейс интернет-магазина"
    },
    "summary": {
      "en": "Make it easy to find a product, put together a cart and move through checkout on a phone or desktop.",
      "ru": "Помогу покупателю найти товар, собрать корзину и пройти оформление заказа на телефоне или компьютере."
    },
    "live": "https://shevdevworks.github.io/cyber-gear/",
    "repo": "https://github.com/shevdevworks/cyber-gear",
    "stack": [
      "JavaScript",
      "HTML",
      "CSS"
    ],
    "brief": {
      "en": "For a new catalog or a store where confusing filters, product pages or checkout get in the way of buying.",
      "ru": "Для нового магазина или каталога, где неудобные фильтры, карточки товаров и оформление заказа мешают покупке."
    },
    "implementation": [
      {
        "en": "Product pages, search, sorting and filters suited to your catalog.",
        "ru": "Карточки товаров, поиск, сортировка и фильтры под ваш ассортимент."
      },
      {
        "en": "A persistent cart, totals and checkout fields with helpful validation.",
        "ru": "Сохраняемая корзина, расчёт суммы и оформление заказа с проверкой полей."
      },
      {
        "en": "Connection to your store platform or API; payments and delivery are scoped around the chosen providers.",
        "ru": "Подключение к платформе магазина или API; оплату и доставку согласуем под выбранные сервисы."
      }
    ],
    "scope": {
      "en": "CyberGear is a personal storefront example with a test catalog. Checkout is simulated; real payments and order processing are not connected.",
      "ru": "CyberGear — личный пример магазина с тестовым каталогом. Оформление имитируется; реальные платежи и обработка заказов не подключены."
    },
    "title": {
      "en": "Online storefronts",
      "ru": "Интернет-магазины"
    },
    "group": "websites",
    "enquiry": 2,
    "benefits": [
      {
        "en": "Product catalogs",
        "ru": "Каталог товаров"
      },
      {
        "en": "Shopping carts",
        "ru": "Корзина"
      },
      {
        "en": "Checkout",
        "ru": "Оформление заказа"
      }
    ]
  },
  {
    "id": "apex",
    "name": "ApexSaaS",
    "category": {
      "en": "SaaS landing page",
      "ru": "Лендинг SaaS-продукта"
    },
    "summary": {
      "en": "Explain your offer clearly and guide visitors towards an enquiry, a booking or the next step for your business.",
      "ru": "Помогу понятно представить ваше предложение и привести посетителя к заявке, записи или другому нужному действию."
    },
    "live": "https://shevdevworks.github.io/apex-saas/",
    "repo": "https://github.com/shevdevworks/apex-saas",
    "stack": [
      "HTML / CSS",
      "JavaScript",
      "GSAP"
    ],
    "brief": {
      "en": "For launching a product, presenting a service or turning an existing design into a responsive, polished website.",
      "ru": "Для запуска продукта, презентации услуги или разработки аккуратного адаптивного сайта по готовому дизайну."
    },
    "implementation": [
      {
        "en": "A page structure built around your offer, content and main call to action.",
        "ru": "Структура страницы под ваше предложение, контент и главное действие."
      },
      {
        "en": "Responsive layouts and purposeful animation that supports the product story.",
        "ru": "Адаптивная вёрстка и анимация, которая помогает раскрыть продукт."
      },
      {
        "en": "Enquiry forms, pricing calculators or plan selectors where your offer needs them.",
        "ru": "Формы заявок, калькуляторы стоимости или подбор тарифа, если это нужно вашему предложению."
      }
    ],
    "scope": {
      "en": "ApexSaaS is a personal landing page concept with a working pricing calculator. The brand, testimonials and business metrics inside the example are fictional.",
      "ru": "ApexSaaS — личный концепт лендинга с рабочим калькулятором тарифов. Бренд, отзывы и бизнес-показатели внутри примера вымышлены."
    },
    "title": {
      "en": "Websites & landing pages",
      "ru": "Сайты и лендинги"
    },
    "group": "websites",
    "enquiry": 0,
    "benefits": [
      {
        "en": "Product presentation",
        "ru": "Презентация продукта"
      },
      {
        "en": "Enquiries",
        "ru": "Заявки"
      },
      {
        "en": "Animation",
        "ru": "Анимация"
      }
    ]
  },
  {
    "id": "trendify",
    "name": "Trendify",
    "category": {
      "en": "Analytics dashboard",
      "ru": "Панель аналитики"
    },
    "summary": {
      "en": "Bring figures, charts and calculations into one interface so your team can find answers without piecing together separate tables.",
      "ru": "Соберу показатели, графики и расчёты в одном интерфейсе, чтобы команда находила ответы без сверки отдельных таблиц."
    },
    "live": "https://shevdevworks.github.io/trendify/",
    "repo": "https://github.com/shevdevworks/trendify",
    "stack": [
      "JavaScript",
      "SVG charts",
      "CSS"
    ],
    "brief": {
      "en": "For sales reporting, internal tools and services where people need to compare data, track changes or calculate costs.",
      "ru": "Для отчётности по продажам, внутренних инструментов и сервисов, где нужно сравнивать данные, следить за изменениями или рассчитывать стоимость."
    },
    "implementation": [
      {
        "en": "Readable charts, key figures and tables with shared filters.",
        "ru": "Понятные графики, ключевые показатели и таблицы с общими фильтрами."
      },
      {
        "en": "Calculations based on your formulas and downloadable reports.",
        "ru": "Расчёты по вашим формулам и скачивание отчётов."
      },
      {
        "en": "Connection to an agreed data source or API, with clear loading and error states.",
        "ru": "Подключение к согласованному источнику данных или API с понятными состояниями загрузки и ошибок."
      }
    ],
    "scope": {
      "en": "Trendify is a personal dashboard example using test data. Real marketplace accounts and sales are not connected.",
      "ru": "Trendify — личный пример панели на тестовых данных. Реальные аккаунты маркетплейсов и продажи не подключены."
    },
    "title": {
      "en": "Dashboards & calculators",
      "ru": "Дашборды и расчёты"
    },
    "group": "apps",
    "enquiry": 4,
    "benefits": [
      {
        "en": "Charts",
        "ru": "Графики"
      },
      {
        "en": "Calculations",
        "ru": "Расчёты"
      },
      {
        "en": "Reports",
        "ru": "Отчёты"
      }
    ]
  },
  {
    "id": "telegram",
    "name": "Telegram",
    "title": {
      "en": "Telegram bots",
      "ru": "Telegram-боты"
    },
    "category": {
      "en": "Bots & automation",
      "ru": "Боты и автоматизация"
    },
    "group": "bots",
    "enquiry": 5,
    "summary": {
      "en": "Collect enquiries, send useful notifications and handle repeat requests right in the chat your customers already use.",
      "ru": "Собирайте заявки, получайте нужные уведомления и обрабатывайте типовые запросы прямо в привычном клиентам чате."
    },
    "stack": [
      "Node.js",
      "TypeScript",
      "Telegram Bot API"
    ],
    "brief": {
      "en": "For businesses that receive enquiries in chat, manually check for updates or keep answering the same questions.",
      "ru": "Для бизнеса, который принимает заявки в чате, вручную проверяет обновления или постоянно отвечает на одни и те же вопросы."
    },
    "implementation": [
      {
        "en": "Step-by-step enquiries, button menus and answers to common questions.",
        "ru": "Пошаговый сбор заявок, меню с кнопками и ответы на частые вопросы."
      },
      {
        "en": "Notifications about new requests or events from a connected service, with filters and pause controls.",
        "ru": "Уведомления о новых заявках или событиях подключённого сервиса с фильтрами и управлением паузой."
      },
      {
        "en": "API integrations, saved settings and handling of repeat events and temporary connection errors.",
        "ru": "Интеграции через API, сохранение настроек, обработка повторных событий и временных ошибок связи."
      }
    ],
    "benefits": [
      {
        "en": "Enquiries",
        "ru": "Заявки"
      },
      {
        "en": "Notifications",
        "ru": "Уведомления"
      },
      {
        "en": "Integrations",
        "ru": "Интеграции"
      }
    ],
    "scope": {
      "en": "I have experience building different types of Telegram bots. I can help you collect enquiries, set up notifications and connect the services you use, with a workflow tailored to your business.",
      "ru": "У меня есть опыт разработки разных Telegram-ботов. Помогу организовать сбор заявок, настроить уведомления и подключить нужные сервисы — со сценарием под задачи вашего бизнеса."
    }
  }
];

export const content = {
  "en": {
    "nav": [
      "Solutions",
      "Services",
      "About"
    ],
    "talk": "Let’s talk",
    "menu": "Open menu",
    "closeMenu": "Close menu",
    "skip": "Skip to content",
    "status": "Open to freelance projects",
    "stamp": "Design → Development",
    "name": "Ivan",
    "role": "Frontend developer",
    "city": "Kyiv, Ukraine",
    "independent": "Independent",
    "headline": [
      "Your idea.",
      "Beautifully built."
    ],
    "intro": "I’ll help you build websites, web tools and Telegram bots that help customers take the next step and your team spend less time on routine tasks. With interfaces that feel right on every screen.",
    "viewWork": "Find your solution",
    "discuss": "Tell me about your project",
    "previewNote": "Examples of what I can build for you",
    "projectSelect": "Choose an example to preview",
    "openCase": "Explore the service",
    "techNote": "Tools I work with",
    "workTitle": "What can I build for you?",
    "workIntro": "Booking, sales, reports or everyday automation. Choose your task and see how I can help, with examples you can explore.",
    "selectedWork": "Solutions for your business",
    "scroll": "Scroll to explore",
    "mobile": "Made for every screen",
    "serviceLink": "Explore this service",
    "serviceIntro": "From the first page to the final interaction.",
    "detailLabel": "What you can get",
    "workCount": "05 examples",
    "serviceCaption": "A few ways I can help",
    "aboutLabel": "The person behind the work",
    "aboutPrinciples": [
      "Care in the details",
      "Clear communication",
      "Ease of use"
    ],
    "contactEyebrow": "Have something in mind?",
    "contactHint": "Let’s build something useful for your business.",
    "filters": [
      "All solutions",
      "Web apps",
      "Websites",
      "Telegram bots"
    ],
    "case": "Explore the service",
    "live": "Try the example",
    "code": "Source code",
    "caseLabel": "Development service",
    "closeCase": "Close service details",
    "brief": "The task I can help with",
    "implementation": "What you can get",
    "scope": "About this example",
    "similar": "Discuss your task",
    "servicesIntro": "A new website, a more useful interface, or a hand with something already in progress.",
    "services": [
      {
        "title": "Websites & landing pages",
        "text": "Responsive business sites and campaign pages, built from your design or shaped around your content.",
        "tags": "HTML / CSS · React · GSAP",
        "icon": "window"
      },
      {
        "title": "Web apps & interfaces",
        "text": "React interfaces with forms, filters, dashboards and the loading and error states that make them usable.",
        "tags": "React · TypeScript · API integration",
        "icon": "layers"
      },
      {
        "title": "E-commerce frontends",
        "text": "Product catalogs, shopping carts and checkout interfaces. Integration scope depends on your platform.",
        "tags": "Catalogs · Cart flows · Checkout UI",
        "icon": "bag"
      },
      {
        "title": "Fixes & improvements",
        "text": "Mobile layout issues, unfinished features, awkward interactions or a design that needs a careful refresh.",
        "tags": "Responsive layouts · UI fixes · Motion",
        "icon": "adjust"
      },
      {
        "title": "Telegram bots & integrations",
        "text": "Enquiry flows, useful notifications and connected services, with controls right in Telegram.",
        "tags": "Enquiries · Notifications · API integrations",
        "icon": "telegram"
      }
    ],
    "aboutTitle": "One developer.\nA direct conversation.",
    "aboutText": "ShevDevWorks is my independent development practice. You work directly with me, from understanding the brief to reviewing the finished interface.",
    "aboutText2": "I care about the parts people notice: readable layouts, useful feedback and interactions that behave as expected. Behind that, I keep the code structured so the next change is easier.",
    "aboutLink": "Take a look at my GitHub",
    "aboutSmall": "Based in Kyiv. Working remotely.",
    "processTitle": "From your brief to the browser.",
    "steps": [
      {
        "title": "Get the scope right",
        "text": "We go through your goals, designs and requirements, then agree on scope, price, deliverables and a timeline."
      },
      {
        "title": "Build & keep you involved",
        "text": "I build the interface and share progress, so you can check the direction before the final handoff."
      },
      {
        "title": "Review & hand over",
        "text": "We check the key flows and screen sizes. You receive the source code and setup instructions."
      }
    ],
    "contactTitle": "What are you\nworking on?",
    "contactText": "Send a design, a brief or just an idea. I’ll help you work out the scope and a sensible next step.",
    "emailLabel": "Email me",
    "telegramLabel": "Message me on Telegram",
    "copy": "Copy email address",
    "copied": "Email copied",
    "copyFailed": "Copy unavailable. Use the email link.",
    "briefTitle": "Start with a few details",
    "serviceLabel": "What do you need?",
    "serviceOptions": [
      "A website or landing page",
      "Booking or appointments",
      "An online storefront",
      "An interactive web tool",
      "A dashboard or calculator",
      "A Telegram bot",
      "Fixes or improvements",
      "Something else"
    ],
    "messageLabel": "A little about the project",
    "placeholder": "What are you building? Add a link to a design or an existing site, if you have one.",
    "sendTelegram": "Send via Telegram",
    "sendEmail": "Send via email",
    "telegramReady": "Confirm sending in Telegram. If the text wasn’t filled in, copy it from this form.",
    "emailReady": "Confirm sending in your email app. If it didn’t open, use the email address on this page.",
    "footer": "Websites, web tools & Telegram bots.",
    "backTop": "Back to top",
    "illustration": "Illustrative workflow",
    "example": "Interface example"
  },
  "ru": {
    "nav": [
      "Решения",
      "Услуги",
      "Обо мне"
    ],
    "talk": "Обсудить проект",
    "menu": "Открыть меню",
    "closeMenu": "Закрыть меню",
    "skip": "Перейти к содержимому",
    "status": "Открыт для новых проектов",
    "stamp": "Дизайн → Разработка",
    "name": "Иван",
    "role": "Frontend-разработчик",
    "city": "Киев, Украина",
    "independent": "Фриланс",
    "headline": [
      "Ваша идея.",
      "Готовый продукт."
    ],
    "intro": "Помогу создать сайты, веб-инструменты и Telegram-ботов, которые помогают клиентам сделать нужный шаг, а команде — тратить меньше времени на рутину. С удобным интерфейсом на любом экране.",
    "viewWork": "Подобрать решение",
    "discuss": "Рассказать о проекте",
    "previewNote": "Примеры решений для ваших задач",
    "projectSelect": "Выберите пример для просмотра",
    "openCase": "Подробнее об услуге",
    "techNote": "Мои инструменты",
    "workTitle": "Что я могу для вас сделать?",
    "workIntro": "Бронирование, продажи, отчёты или автоматизация рутины. Выберите свою задачу и посмотрите, чем я могу помочь, на конкретных примерах.",
    "selectedWork": "Решения для вашего бизнеса",
    "scroll": "Листайте дальше",
    "mobile": "Удобно на любом экране",
    "serviceLink": "Подробнее об услуге",
    "serviceIntro": "От первой страницы до последней детали.",
    "detailLabel": "Что вы получите",
    "workCount": "05 примеров",
    "serviceCaption": "Чем я могу помочь",
    "aboutLabel": "Кто стоит за проектами",
    "aboutPrinciples": [
      "Внимание к деталям",
      "Понятное общение",
      "Удобство для пользователя"
    ],
    "contactEyebrow": "Есть идея?",
    "contactHint": "Создадим полезный инструмент для вашего бизнеса.",
    "filters": [
      "Все решения",
      "Веб-приложения",
      "Сайты",
      "Telegram-боты"
    ],
    "case": "Подробнее об услуге",
    "live": "Посмотреть пример",
    "code": "Исходный код",
    "caseLabel": "Услуга разработки",
    "closeCase": "Закрыть описание услуги",
    "brief": "С какой задачей помогу",
    "implementation": "Что вы можете получить",
    "scope": "О примере",
    "similar": "Обсудить задачу",
    "servicesIntro": "Новый сайт, удобный интерфейс или помощь с проектом, который уже в работе.",
    "services": [
      {
        "title": "Сайты и лендинги",
        "text": "Адаптивные сайты для бизнеса и посадочные страницы по вашему дизайну или на основе вашего контента.",
        "tags": "HTML / CSS · React · GSAP",
        "icon": "window"
      },
      {
        "title": "Веб-приложения и интерфейсы",
        "text": "React-интерфейсы с формами, фильтрами, панелями данных и понятными состояниями загрузки и ошибок.",
        "tags": "React · TypeScript · Подключение API",
        "icon": "layers"
      },
      {
        "title": "Интерфейсы магазинов",
        "text": "Каталоги, корзины и оформление заказов. Объём интеграций согласуем с учётом вашей платформы.",
        "tags": "Каталоги · Корзины · Оформление заказа",
        "icon": "bag"
      },
      {
        "title": "Доработки и исправления",
        "text": "Проблемы мобильной вёрстки, незаконченные функции, неудобные сценарии или аккуратное обновление дизайна.",
        "tags": "Адаптивность · Доработки UI · Анимация",
        "icon": "adjust"
      },
      {
        "title": "Telegram-боты и интеграции",
        "text": "Сбор заявок, полезные уведомления и подключение сервисов с управлением прямо в Telegram.",
        "tags": "Заявки · Уведомления · Интеграции API",
        "icon": "telegram"
      }
    ],
    "aboutTitle": "Один разработчик.\nПрямое общение.",
    "aboutText": "ShevDevWorks — имя, под которым я работаю как независимый разработчик. Вы общаетесь со мной напрямую: от разбора задачи до проверки готового интерфейса.",
    "aboutText2": "Мне важны детали, которые замечает пользователь: читаемая вёрстка, понятная обратная связь и предсказуемое поведение. Код держу в порядке, чтобы следующие изменения было проще внести.",
    "aboutLink": "Посмотреть мой GitHub",
    "aboutSmall": "В Киеве. Работаю удалённо.",
    "processTitle": "От вашей задачи до готового сайта.",
    "steps": [
      {
        "title": "Разбираемся с задачей",
        "text": "Обсуждаем цели, дизайн и требования. Согласовываем объём работы, стоимость, результат и сроки."
      },
      {
        "title": "Разрабатываю и показываю",
        "text": "Собираю интерфейс и показываю промежуточные результаты, чтобы вы могли проверить направление до финальной сдачи."
      },
      {
        "title": "Проверяем и передаём",
        "text": "Проверяем основные сценарии и размеры экранов. Вы получаете исходный код и инструкции по запуску."
      }
    ],
    "contactTitle": "Над чем вы\nработаете?",
    "contactText": "Пришлите дизайн, ТЗ или просто идею. Помогу определить объём работы и следующий шаг.",
    "emailLabel": "Написать на почту",
    "telegramLabel": "Написать в Telegram",
    "copy": "Скопировать адрес почты",
    "copied": "Адрес скопирован",
    "copyFailed": "Копирование недоступно. Нажмите на адрес почты.",
    "briefTitle": "Начнём с пары деталей",
    "serviceLabel": "Что вам нужно?",
    "serviceOptions": [
      "Сайт или лендинг",
      "Бронирование или запись",
      "Интернет-магазин",
      "Веб-инструмент",
      "Дашборд или калькулятор",
      "Telegram-бот",
      "Доработки и исправления",
      "Другая задача"
    ],
    "messageLabel": "Немного о проекте",
    "placeholder": "Что нужно разработать? Если есть дизайн или действующий сайт, добавьте ссылку.",
    "sendTelegram": "Отправить в Telegram",
    "sendEmail": "Отправить на почту",
    "telegramReady": "Подтвердите отправку в Telegram. Если текст не подставился, скопируйте его из формы.",
    "emailReady": "Подтвердите отправку в почтовом приложении. Если оно не открылось, напишите на адрес, указанный на странице.",
    "footer": "Сайты, веб-инструменты и Telegram-боты.",
    "backTop": "Наверх",
    "illustration": "Пример сценария",
    "example": "Пример интерфейса"
  }
};
