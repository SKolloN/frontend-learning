import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Boxes,
  CheckCircle2,
  ChevronDown,
  Code2,
  Filter,
  FunctionSquare,
  GitBranch,
  GraduationCap,
  HelpCircle,
  Layers,
  Lightbulb,
  Map,
  PlayCircle,
  Repeat,
  Route,
  Search,
  Sigma,
  Sparkles,
  Terminal,
} from "lucide-react";

const learningPlan = [
  {
    block: "Блок 1",
    title: "Самая база JS",
    goal: "Понять, что программа работает с данными: значения, переменные, условия, объекты, массивы и функции.",
    lessons: ["Урок 1. Значения, переменные, console.log", "Урок 2. Условия", "Урок 3. Объекты", "Урок 4. Массивы", "Урок 5. Функции"],
  },
  {
    block: "Блок 2",
    title: "Методы массивов",
    goal: "Научиться думать списками: отбирать, преобразовывать, искать и собирать итог.",
    lessons: ["Урок 6. filter", "Урок 7. map", "Урок 8. reduce", "Урок 9. find, some, every"],
  },
  {
    block: "Блок 3",
    title: "Практика на товарах",
    goal: "Собрать набор функций для каталога фигурок: фильтры, поиск, цены, наличие, статистика.",
    lessons: ["Урок 10. Мини-каталог товаров"],
  },
  {
    block: "Блок 4",
    title: "DOM",
    goal: "Научиться менять HTML через JS: находить элементы, менять текст, классы и рендерить карточки товаров.",
    lessons: ["Урок 11. Что такое DOM", "Урок 12. События", "Урок 13. Рендер товаров на страницу"],
  },
  {
    block: "Блок 5",
    title: "Асинхронность",
    goal: "Понять отложенный код и получение данных с сервера.",
    lessons: ["Урок 14. setTimeout, setInterval", "Урок 15. fetch, Promise, async/await"],
  },
  {
    block: "Блок 6",
    title: "Подготовка к React",
    goal: "Освоить современный JS и понять, какую проблему решает React.",
    lessons: ["Урок 16. Современный JS", "Урок 17. Почему нужен React"],
  },
];

const lessons = [
  {
    id: "lesson-01",
    status: "current",
    title: "Урок 1. Значения, переменные и console.log",
    level: "Старт",
    duration: "30–60 минут",
    goal: "Понять, что JavaScript работает с данными, а переменные позволяют сохранять эти данные под понятными именами.",
    thinking: "Сначала не думай про сложный код. Думай так: у меня есть данные → я даю им имя → могу использовать это имя дальше.",
    facts: [
      "console.log не делает программу умной — он просто помогает тебе заглянуть внутрь и увидеть значение.",
      "1500 и \"1500\" для JavaScript — разные вещи: первое число, второе текст.",
      "Почти всегда начинай с const. let нужен только когда значение будет реально меняться.",
    ],
    theory: [
      {
        title: "Значения",
        text: "В JS есть разные типы значений: строки для текста, числа для вычислений, boolean для да/нет.",
        code: `"Naruto Figure" // строка
1500            // число
true            // правда
false           // ложь`,
      },
      {
        title: "console.log",
        text: "Используется, чтобы посмотреть значение в консоли. Это как фонарик для проверки, что лежит внутри переменной.",
        code: `console.log("Привет");
console.log(1500);
console.log(true);`,
      },
      {
        title: "const",
        text: "Используй, когда значение не планируешь переприсваивать.",
        code: `const productTitle = "Naruto Figure";
const productPrice = 1500;

console.log(productTitle);
console.log(productPrice);`,
      },
      {
        title: "let",
        text: "Используй, когда значение будет меняться во время работы программы.",
        code: `let productsCount = 0;

productsCount = productsCount + 1;
productsCount = productsCount + 1;

console.log(productsCount);`,
      },
    ],
    practice: [
      {
        title: "Практика 1. Первый товар",
        task: "Создай файл 01-js-basics/lesson-01.js и опиши товар Naruto Figure через const: название, цену, категорию и наличие.",
        code: `const productTitle = "Naruto Figure";
const productPrice = 1500;
const productCategory = "anime";
const isAvailable = true;

console.log(productTitle);
console.log(productPrice);
console.log(productCategory);
console.log(isAvailable);`,
      },
      {
        title: "Практика 2. Второй товар",
        task: "Ниже в этом же файле создай второй товар Luffy Figure и выведи все значения через console.log.",
        code: `const secondProductTitle = "Luffy Figure";
const secondProductPrice = 2000;
const secondProductCategory = "anime";
const secondProductIsAvailable = false;`,
      },
      {
        title: "Практика 3. Счётчик",
        task: "Создай счётчик товаров через let, увеличь его три раза и заранее подумай, что выведется.",
        code: `let productsCount = 0;

productsCount = productsCount + 1;
productsCount = productsCount + 1;
productsCount = productsCount + 1;

console.log(productsCount);`,
      },
    ],
    run: `node 01-js-basics/lesson-01.js`,
    github: `git status
git add 01-js-basics/lesson-01.js
git commit -m "Add lesson 01 JS basics"
git push`,
  },
  {
    id: "lesson-02",
    status: "soon",
    title: "Урок 2. Условия",
    level: "База",
    duration: "45–60 минут",
    goal: "Научиться писать развилки: если товар дорогой — одно действие, если дешёвый — другое.",
    thinking: "Условие — это вопрос, на который JS отвечает true или false.",
    facts: ["if запускает код только если условие истинное.", "=== лучше использовать почти всегда вместо ==.", "else — запасной путь, если условие не сработало."],
    theory: [],
    practice: [],
    run: "node 01-js-basics/lesson-02.js",
    github: `git status
git add 01-js-basics/lesson-02.js
git commit -m "Add lesson 02 conditions"
git push`,
  },
];

const hintGroups = [
  {
    id: "base",
    title: "База языка",
    icon: Boxes,
    description: "Переменные, условия, массивы и объекты — фундамент для всего JS.",
    cards: [
      {
        title: "const",
        badge: "храню значение",
        use: "Когда значение не нужно переприсваивать: товар, цена, массив, объект, результат функции.",
        thinking: "Думай как о коробке с именем. Положил значение и дальше обращаешься по имени.",
        example: `const product = {
  title: "Naruto Figure",
  price: 1500
};`,
        question: "Значение будет переприсваиваться?",
        answer: "Нет — чаще всего бери const.",
      },
      {
        title: "let",
        badge: "значение меняется",
        use: "Когда значение будет изменяться: счётчик, текущая сумма, номер страницы, состояние шага.",
        thinking: "Это коробка, содержимое которой может меняться во время выполнения программы.",
        example: `let count = 0;
count = count + 1;`,
        question: "Значение должно измениться позже?",
        answer: "Да — бери let.",
      },
      {
        title: "if / else",
        badge: "выбор пути",
        use: "Когда код должен сработать только при определённом условии.",
        thinking: "Если условие правда — выполняем один путь. Иначе — другой.",
        example: `if (product.price > 1000) {
  console.log("Дорогой товар");
} else {
  console.log("Обычный товар");
}`,
        question: "Нужно выбрать поведение по условию?",
        answer: "Да — используй if / else.",
      },
      {
        title: "===",
        badge: "строго сравниваю",
        use: "Когда нужно проверить, равно ли одно значение другому.",
        thinking: "Это вопрос: ‘значение точно такое же?’ В JS почти всегда лучше использовать ===, а не ==.",
        example: `product.category === "anime"`,
        question: "Нужно проверить равенство?",
        answer: "Да — используй ===.",
      },
    ],
  },
  {
    id: "data",
    title: "Данные",
    icon: Layers,
    description: "Как хранить товар, список товаров и обращаться к полям.",
    cards: [
      {
        title: "Объект",
        badge: "одна сущность",
        use: "Когда нужно описать один товар, пользователя, заказ или пост с несколькими свойствами.",
        thinking: "Объект — это карточка. У карточки есть поля: title, price, category.",
        example: `const product = {
  title: "Luffy Figure",
  price: 2000,
  category: "anime"
};

console.log(product.title);`,
        question: "Нужно описать один товар?",
        answer: "Да — используй объект.",
      },
      {
        title: "Массив",
        badge: "список",
        use: "Когда есть список чего-то: товары, цены, имена, категории.",
        thinking: "Массив — это полка. На полке лежит много элементов.",
        example: `const titles = [
  "Naruto Figure",
  "Luffy Figure",
  "Gojo Figure"
];`,
        question: "Нужно хранить много однотипных вещей?",
        answer: "Да — используй массив.",
      },
      {
        title: "Массив объектов",
        badge: "каталог",
        use: "Самый частый вариант в реальной разработке: список товаров, пользователей, постов, заказов.",
        thinking: "Весь массив — каталог. Каждый объект внутри — отдельная карточка товара.",
        example: `const products = [
  { title: "Naruto", price: 1500, category: "anime" },
  { title: "Keyboard", price: 3000, category: "tech" }
];`,
        question: "Нужно хранить каталог товаров?",
        answer: "Да — массив объектов.",
      },
    ],
  },
  {
    id: "functions",
    title: "Функции",
    icon: FunctionSquare,
    description: "Как упаковывать логику и возвращать результат.",
    cards: [
      {
        title: "function",
        badge: "мини-машина",
        use: "Когда кусок логики нужно переиспользовать несколько раз.",
        thinking: "Функция — это мини-машина: получила данные, что-то сделала, вернула результат.",
        example: `function getDiscountPrice(price) {
  return price * 0.9;
}`,
        question: "Один и тот же код нужен несколько раз?",
        answer: "Да — вынеси его в функцию.",
      },
      {
        title: "Параметры",
        badge: "входные данные",
        use: "Когда функция должна работать с разными товарами, ценами или списками.",
        thinking: "Параметр — временное имя для того, что ты передал внутрь функции.",
        example: `function showProductTitle(product) {
  console.log(product.title);
}`,
        question: "Функции нужны данные снаружи?",
        answer: "Да — передай их параметрами.",
      },
      {
        title: "return",
        badge: "ответ функции",
        use: "Когда функция должна отдать результат, чтобы его можно было использовать дальше.",
        thinking: "console.log просто показывает. return возвращает значение наружу.",
        example: `function getPriceWithDelivery(price) {
  return price + 500;
}

const finalPrice = getPriceWithDelivery(1500);`,
        question: "Результат нужен дальше в коде?",
        answer: "Да — используй return.",
      },
    ],
  },
  {
    id: "array-methods",
    title: "Методы массивов",
    icon: Filter,
    description: "filter, map, reduce, forEach — главные инструменты для списков.",
    cards: [
      {
        title: "filter",
        badge: "оставить подходящие",
        use: "Когда нужно отобрать часть элементов из массива.",
        thinking: "filter спрашивает каждый элемент: ‘оставить тебя?’ true — оставляет, false — выкидывает.",
        example: `const animeProducts = products.filter(function (product) {
  return product.category === "anime";
});`,
        question: "Нужно получить только часть списка?",
        answer: "Да — используй filter.",
        icon: Filter,
      },
      {
        title: "map",
        badge: "превратить каждый",
        use: "Когда нужно получить новый массив в другом виде: например, только названия товаров.",
        thinking: "map проходит по каждому элементу и делает из него что-то новое.",
        example: `const titles = products.map(function (product) {
  return product.title;
});`,
        question: "Нужно из каждого товара получить что-то другое?",
        answer: "Да — используй map.",
        icon: Map,
      },
      {
        title: "reduce",
        badge: "собрать итог",
        use: "Когда нужно получить одно итоговое значение: сумму, количество, объект-результат.",
        thinking: "reduce — накопитель. Он идёт по массиву и постепенно собирает результат.",
        example: `const totalPrice = products.reduce(function (sum, product) {
  return sum + product.price;
}, 0);`,
        question: "Нужно получить одно итоговое значение?",
        answer: "Да — используй reduce.",
        icon: Sigma,
      },
      {
        title: "forEach",
        badge: "просто сделать действие",
        use: "Когда нужно пройтись по массиву и что-то выполнить: вывести в консоль, нарисовать, отправить.",
        thinking: "forEach не создаёт новый массив. Он просто выполняет действие для каждого элемента.",
        example: `products.forEach(function (product) {
  console.log(product.title);
});`,
        question: "Нужно просто выполнить действие для каждого элемента?",
        answer: "Да — используй forEach.",
        icon: Repeat,
      },
    ],
  },
  {
    id: "git-github",
    title: "Git и GitHub",
    icon: GitBranch,
    description: "Как сохранять изменения, работать с ветками и отправлять код на GitHub.",
    cards: [
      {
        title: "git status",
        badge: "проверяю состояние",
        use: "Перед add, commit и push. Показывает, какие файлы изменены, что уже добавлено в коммит, а что ещё нет.",
        thinking: "Это как посмотреть на рабочий стол перед уборкой: что изменилось, что готово, что ещё лежит отдельно.",
        example: `git status`,
        question: "Хочу понять, что изменилось в проекте?",
        answer: "Да — сначала всегда делай git status.",
      },
      {
        title: "git add",
        badge: "добавляю в коммит",
        use: "Когда файл изменён и ты хочешь включить его в следующий коммит.",
        thinking: "git add — это не сохранение навсегда, а подготовка файлов к коммиту. Как положить вещи в коробку перед отправкой.",
        example: `git add 01-js-basics/products.js

// или добавить все изменённые файлы:
git add .`,
        question: "Файл готов попасть в коммит?",
        answer: "Да — используй git add.",
      },
      {
        title: "git commit",
        badge: "сохраняю точку истории",
        use: "Когда изменения уже добавлены через git add и нужно сохранить понятную точку в истории проекта.",
        thinking: "Коммит — это сохранённый этап работы с подписью: что именно ты сделал.",
        example: `git commit -m "Solve products array exercises"`,
        question: "Хочу сохранить готовый этап работы?",
        answer: "Да — делай commit с понятным сообщением.",
      },
      {
        title: "git push",
        badge: "отправляю на GitHub",
        use: "Когда локальные коммиты нужно отправить в удалённый репозиторий GitHub.",
        thinking: "commit сохраняет на компьютере. push отправляет эти сохранения на GitHub.",
        example: `git push`,
        question: "Коммит уже есть, но его ещё нет на GitHub?",
        answer: "Да — используй git push.",
      },
      {
        title: "git clone",
        badge: "скачиваю репозиторий",
        use: "Когда проект уже есть на GitHub и нужно скачать его на компьютер.",
        thinking: "clone — это сделать локальную копию GitHub-репозитория у себя на компьютере.",
        example: `git clone https://github.com/username/repository-name.git`,
        question: "Проект уже есть на GitHub, но его нет на компьютере?",
        answer: "Да — используй git clone.",
      },
      {
        title: "Обычный порядок работы",
        badge: "ежедневный сценарий",
        use: "Когда сел делать учебную задачу или правку в проекте.",
        thinking: "Сначала проверяю состояние, потом создаю/выбираю ветку, делаю изменения, сохраняю коммитом и отправляю на GitHub.",
        example: `git status
git switch -c lesson-new-task

// работаешь с файлами

git status
git add .
git commit -m "Add new task solution"
git push -u origin lesson-new-task`,
        question: "Не понимаю, в каком порядке делать команды?",
        answer: "Иди по сценарию: status → branch/switch → add → commit → push.",
      },
    ],
  },
];

const allHintCards = hintGroups.flatMap((group) => group.cards.map((card) => ({ ...card, group: group.title, groupId: group.id })));

function CodeBlock({ code }) {
  return (
    <pre className="mt-4 overflow-x-auto rounded-2xl bg-slate-950 p-4 text-sm leading-relaxed text-slate-100 shadow-inner">
      <code>{code}</code>
    </pre>
  );
}

function SectionTitle({ icon: Icon, eyebrow, title, text }) {
  return (
    <div className="mb-6 rounded-3xl bg-white p-6 shadow-sm sm:p-8">
      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-slate-100 p-3">
          <Icon className="h-6 w-6 text-slate-800" />
        </div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{eyebrow}</p>
      </div>
      <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">{title}</h1>
      <p className="mt-4 max-w-3xl text-lg text-slate-600">{text}</p>
    </div>
  );
}

function HintCard({ card }) {
  const [open, setOpen] = useState(false);
  const Icon = card.icon || HelpCircle;

  return (
    <motion.div layout initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="rounded-xl bg-slate-100 p-2"><Icon className="h-5 w-5 text-slate-700" /></div>
            <h3 className="text-xl font-bold text-slate-900">{card.title}</h3>
          </div>
          <p className="mt-2 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">{card.badge}</p>
        </div>
      </div>

      <div className="mt-4 space-y-3 text-slate-700">
        <p><span className="font-semibold text-slate-900">Где используется:</span> {card.use}</p>
        <p><span className="font-semibold text-slate-900">Как мыслить:</span> {card.thinking}</p>
      </div>

      <button onClick={() => setOpen(!open)} className="mt-5 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">
        <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
        {open ? "Скрыть пример" : "Показать пример"}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
            <CodeBlock code={card.example} />
            <div className="mt-4 rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-950">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                <div>
                  <p className="font-bold">Проверочный вопрос</p>
                  <p className="mt-1">{card.question}</p>
                  <p className="mt-2 font-semibold">{card.answer}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function PlanView() {
  return (
    <div>
      <SectionTitle icon={Route} eyebrow="Маршрут" title="План обучения JavaScript" text="Идём от самых простых значений до DOM, асинхронности и подготовки к React. Каждый блок будет превращаться в уроки, практику и карточки." />
      <div className="grid gap-5 lg:grid-cols-2">
        {learningPlan.map((item, index) => (
          <motion.div key={item.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.04 }} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-widest text-slate-400">{item.block}</p>
            <h2 className="mt-2 text-2xl font-black">{item.title}</h2>
            <p className="mt-3 text-slate-600">{item.goal}</p>
            <div className="mt-5 space-y-2">
              {item.lessons.map((lesson) => (
                <div key={lesson} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3 text-sm text-slate-700">
                  <BookOpen className="h-4 w-4 shrink-0 text-slate-500" />
                  <span>{lesson}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function LessonsView() {
  const [activeLessonId, setActiveLessonId] = useState("lesson-01");
  const activeLesson = lessons.find((lesson) => lesson.id === activeLessonId) || lessons[0];

  return (
    <div>
      <SectionTitle icon={GraduationCap} eyebrow="Учебник" title="Интерактивные уроки" text="Здесь будут храниться все уроки: объяснение, примеры, практика, команда запуска и GitHub-команды после выполнения." />

      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <aside className="space-y-3">
          {lessons.map((lesson) => (
            <button key={lesson.id} onClick={() => setActiveLessonId(lesson.id)} className={`w-full rounded-2xl border p-4 text-left transition ${activeLessonId === lesson.id ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-white hover:border-slate-400"}`}>
              <div className="flex items-center justify-between gap-3">
                <p className="font-bold">{lesson.title}</p>
                <span className={`rounded-full px-2 py-1 text-xs font-bold ${lesson.status === "current" ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>{lesson.status === "current" ? "сейчас" : "скоро"}</span>
              </div>
              <p className={`mt-2 text-sm ${activeLessonId === lesson.id ? "text-slate-200" : "text-slate-500"}`}>{lesson.goal}</p>
            </button>
          ))}
        </aside>

        <main className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-600">{activeLesson.level}</span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-600">{activeLesson.duration}</span>
          </div>
          <h2 className="mt-4 text-3xl font-black">{activeLesson.title}</h2>
          <p className="mt-3 text-lg text-slate-600">{activeLesson.goal}</p>

          <div className="mt-6 rounded-2xl bg-amber-50 p-5 text-amber-950">
            <div className="flex items-start gap-3">
              <Lightbulb className="mt-1 h-5 w-5 shrink-0" />
              <div>
                <p className="font-black">Как правильно мыслить</p>
                <p className="mt-1">{activeLesson.thinking}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {activeLesson.facts.map((fact) => (
              <div key={fact} className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                <Sparkles className="mb-2 h-4 w-4 text-slate-500" />
                {fact}
              </div>
            ))}
          </div>

          {activeLesson.theory.length > 0 ? (
            <div className="mt-8 space-y-6">
              <h3 className="text-2xl font-black">Теория и примеры</h3>
              {activeLesson.theory.map((block) => (
                <section key={block.title} className="rounded-2xl border border-slate-200 p-5">
                  <h4 className="text-xl font-bold">{block.title}</h4>
                  <p className="mt-2 text-slate-600">{block.text}</p>
                  <CodeBlock code={block.code} />
                </section>
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-2xl border border-dashed border-slate-300 p-6 text-slate-500">Этот урок будет заполнен, когда мы до него дойдём.</div>
          )}

          {activeLesson.practice.length > 0 && (
            <div className="mt-8 space-y-6">
              <h3 className="text-2xl font-black">Практика</h3>
              {activeLesson.practice.map((task, index) => (
                <section key={task.title} className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Задание {index + 1}</p>
                  <h4 className="mt-1 text-xl font-bold">{task.title}</h4>
                  <p className="mt-2 text-slate-600">{task.task}</p>
                  <CodeBlock code={task.code} />
                </section>
              ))}
            </div>
          )}

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-950 p-5 text-white">
              <div className="flex items-center gap-2"><PlayCircle className="h-5 w-5" /><p className="font-black">Запуск урока</p></div>
              <CodeBlock code={activeLesson.run} />
            </div>
            <div className="rounded-2xl bg-slate-950 p-5 text-white">
              <div className="flex items-center gap-2"><GitBranch className="h-5 w-5" /><p className="font-black">Сохранить в GitHub</p></div>
              <CodeBlock code={activeLesson.github} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function HintsView() {
  const [activeGroup, setActiveGroup] = useState("all");
  const [query, setQuery] = useState("");

  const visibleCards = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return allHintCards.filter((card) => {
      const matchesGroup = activeGroup === "all" || card.groupId === activeGroup;
      const haystack = `${card.title} ${card.badge} ${card.use} ${card.thinking} ${card.group}`.toLowerCase();
      const matchesQuery = !normalizedQuery || haystack.includes(normalizedQuery);
      return matchesGroup && matchesQuery;
    });
  }, [activeGroup, query]);

  return (
    <div>
      <SectionTitle icon={Boxes} eyebrow="Подсказки" title="Шпаргалки по конструкциям" text="Карточки отвечают на главный вопрос: где это используется, как об этом думать и какой пример запомнить." />

      <section className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">
        <button onClick={() => setActiveGroup("all")} className={`rounded-2xl border p-4 text-left transition ${activeGroup === "all" ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-white hover:border-slate-400"}`}>
          <p className="font-bold">Все</p>
          <p className={`mt-1 text-sm ${activeGroup === "all" ? "text-slate-200" : "text-slate-500"}`}>Общий обзор</p>
        </button>
        {hintGroups.map((group) => {
          const Icon = group.icon;
          const active = activeGroup === group.id;
          return (
            <button key={group.id} onClick={() => setActiveGroup(group.id)} className={`rounded-2xl border p-4 text-left transition ${active ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-white hover:border-slate-400"}`}>
              <Icon className="h-5 w-5" />
              <p className="mt-2 font-bold">{group.title}</p>
              <p className={`mt-1 text-sm ${active ? "text-slate-200" : "text-slate-500"}`}>{group.cards.length} карточек</p>
            </button>
          );
        })}
      </section>

      <div className="mt-6 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
        <Search className="h-5 w-5 text-slate-400" />
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Поиск: filter, объект, return, commit..." className="w-full bg-transparent text-base outline-none placeholder:text-slate-400" />
      </div>

      <main className="mt-6 grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visibleCards.map((card) => <HintCard key={`${card.group}-${card.title}`} card={card} />)}
        </AnimatePresence>
      </main>

      {visibleCards.length === 0 && <div className="mt-6 rounded-2xl bg-white p-8 text-center text-slate-600 shadow-sm">Ничего не найдено. Попробуй другой запрос.</div>}
    </div>
  );
}

function WorkflowView() {
  const steps = [
    ["1", "Открыл проект", "cd C:\Users\skoll\Documents\frontend-learning"],
    ["2", "Проверил состояние", "git status"],
    ["3", "Забрал изменения", "git pull"],
    ["4", "Сделал урок", "node 01-js-basics/lesson-01.js"],
    ["5", "Добавил файлы", "git add ."],
    ["6", "Создал коммит", "git commit -m \"Add lesson solution\""],
    ["7", "Отправил на GitHub", "git push"],
  ];

  return (
    <div>
      <SectionTitle icon={Terminal} eyebrow="Рабочий процесс" title="Как обновлять проект и шпаргалку в GitHub" text="Эта секция нужна, чтобы не вспоминать команды каждый раз. Просто иди по шагам сверху вниз." />
      <div className="grid gap-4">
        {steps.map(([number, title, command]) => (
          <div key={number} className="grid gap-3 rounded-2xl bg-white p-5 shadow-sm md:grid-cols-[80px_1fr_1.4fr] md:items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-lg font-black text-white">{number}</div>
            <div>
              <p className="text-lg font-black">{title}</p>
              <p className="text-sm text-slate-500">Шаг рабочего процесса</p>
            </div>
            <CodeBlock code={command} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function JavaScriptLearningApp() {
  const [tab, setTab] = useState("lessons");

  const tabs = [
    { id: "lessons", title: "Уроки", icon: GraduationCap },
    { id: "plan", title: "План", icon: Route },
    { id: "hints", title: "Шпаргалки", icon: Boxes },
    { id: "workflow", title: "GitHub", icon: GitBranch },
  ];

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white shadow-sm sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Frontend learning</p>
              <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">JS Academy</h1>
              <p className="mt-4 max-w-3xl text-lg text-slate-300">Интерактивное приложение для обучения JavaScript: уроки, шпаргалки, практика, GitHub-команды и мои подсказки по мышлению.</p>
            </div>
            <div className="rounded-3xl bg-white/10 p-4 text-sm text-slate-200">
              <p className="font-bold text-white">Текущий фокус</p>
              <p className="mt-1">Урок 1: значения, переменные, console.log</p>
            </div>
          </div>
        </header>

        <nav className="mb-6 grid gap-3 rounded-3xl bg-white p-2 shadow-sm sm:grid-cols-4">
          {tabs.map((item) => {
            const Icon = item.icon;
            const active = tab === item.id;
            return (
              <button key={item.id} onClick={() => setTab(item.id)} className={`flex items-center justify-center gap-2 rounded-2xl px-4 py-3 font-bold transition ${active ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"}`}>
                <Icon className="h-5 w-5" />
                {item.title}
              </button>
            );
          })}
        </nav>

        <AnimatePresence mode="wait">
          <motion.div key={tab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.18 }}>
            {tab === "lessons" && <LessonsView />}
            {tab === "plan" && <PlanView />}
            {tab === "hints" && <HintsView />}
            {tab === "workflow" && <WorkflowView />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
