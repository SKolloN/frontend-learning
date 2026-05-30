import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Boxes, GitBranch, FunctionSquare, Filter, Map, Sigma, Repeat, HelpCircle, CheckCircle2 } from "lucide-react";

const groups = [
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
        answer: "Нет — чаще всего бери const."
      },
      {
        title: "let",
        badge: "значение меняется",
        use: "Когда значение будет изменяться: счётчик, текущая сумма, номер страницы, состояние шага.",
        thinking: "Это коробка, содержимое которой может меняться во время выполнения программы.",
        example: `let count = 0;
count = count + 1;`,
        question: "Значение должно измениться позже?",
        answer: "Да — бери let."
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
        answer: "Да — используй if / else."
      },
      {
        title: "===",
        badge: "строго сравниваю",
        use: "Когда нужно проверить, равно ли одно значение другому.",
        thinking: "Это вопрос: ‘значение точно такое же?’ В JS почти всегда лучше использовать ===, а не ==.",
        example: `product.category === "anime"`,
        question: "Нужно проверить равенство?",
        answer: "Да — используй ===."
      }
    ]
  },
  {
    id: "data",
    title: "Данные",
    icon: GitBranch,
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
        answer: "Да — используй объект."
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
        answer: "Да — используй массив."
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
        answer: "Да — массив объектов."
      }
    ]
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
        answer: "Да — вынеси его в функцию."
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
        answer: "Да — передай их параметрами."
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
        answer: "Да — используй return."
      }
    ]
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
        icon: Filter
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
        icon: Map
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
        icon: Sigma
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
        icon: Repeat
      }
    ]
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
        answer: "Да — сначала всегда делай git status."
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
        answer: "Да — используй git add."
      },
      {
        title: "git commit",
        badge: "сохраняю точку истории",
        use: "Когда изменения уже добавлены через git add и нужно сохранить понятную точку в истории проекта.",
        thinking: "Коммит — это сохранённый этап работы с подписью: что именно ты сделал.",
        example: `git commit -m "Solve products array exercises"`,
        question: "Хочу сохранить готовый этап работы?",
        answer: "Да — делай commit с понятным сообщением."
      },
      {
        title: "git push",
        badge: "отправляю на GitHub",
        use: "Когда локальные коммиты нужно отправить в удалённый репозиторий GitHub.",
        thinking: "commit сохраняет на компьютере. push отправляет эти сохранения на GitHub.",
        example: `git push`,
        question: "Коммит уже есть, но его ещё нет на GitHub?",
        answer: "Да — используй git push."
      },
      {
        title: "git clone",
        badge: "скачиваю репозиторий",
        use: "Когда проект уже есть на GitHub и нужно скачать его на компьютер.",
        thinking: "clone — это сделать локальную копию GitHub-репозитория у себя на компьютере.",
        example: `git clone https://github.com/username/repository-name.git`,
        question: "Проект уже есть на GitHub, но его нет на компьютере?",
        answer: "Да — используй git clone."
      },
      {
        title: "git remote",
        badge: "связываю с GitHub",
        use: "Когда проект создан на компьютере, а потом нужно подключить его к репозиторию на GitHub.",
        thinking: "remote — это адрес удалённого репозитория. Обычно он называется origin.",
        example: `git remote add origin https://github.com/username/repository-name.git
git branch -M main
git push -u origin main`,
        question: "Проект локальный, а GitHub-адрес ещё не подключён?",
        answer: "Да — добавь remote origin."
      },
      {
        title: "git branch",
        badge: "работаю в ветке",
        use: "Когда нужно делать задачу отдельно от основной ветки main.",
        thinking: "Ветка — это отдельная линия работы. Можно экспериментировать, не ломая main.",
        example: `git branch

git switch -c lesson-array-methods`,
        question: "Хочу делать новую задачу отдельно от main?",
        answer: "Да — создай новую ветку."
      },
      {
        title: "git switch",
        badge: "переключаюсь между ветками",
        use: "Когда нужно перейти из одной ветки в другую.",
        thinking: "switch — это перейти на другую линию работы.",
        example: `git switch main

git switch lesson-array-methods`,
        question: "Нужно перейти в другую ветку?",
        answer: "Да — используй git switch."
      },
      {
        title: "git pull",
        badge: "забираю обновления",
        use: "Когда на GitHub появились изменения, и их нужно скачать в локальный проект.",
        thinking: "push отправляет наверх, pull забирает сверху к тебе.",
        example: `git pull`,
        question: "На GitHub есть новые изменения, которых нет у меня?",
        answer: "Да — используй git pull."
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
        answer: "Иди по сценарию: status → branch/switch → add → commit → push."
      },
      {
        title: "git log",
        badge: "смотрю историю",
        use: "Когда нужно посмотреть историю коммитов и понять, что делалось раньше.",
        thinking: "log — это журнал сохранённых точек проекта.",
        example: `git log --oneline`,
        question: "Хочу посмотреть историю изменений?",
        answer: "Да — используй git log --oneline."
      }
    ]
  }
];

const allCards = groups.flatMap(group => group.cards.map(card => ({ ...card, group: group.title })));

function CodeBlock({ code }) {
  return (
    <pre className="mt-4 overflow-x-auto rounded-2xl bg-slate-950 p-4 text-sm leading-relaxed text-slate-100 shadow-inner">
      <code>{code}</code>
    </pre>
  );
}

function Card({ card }) {
  const [open, setOpen] = useState(false);
  const Icon = card.icon || HelpCircle;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="rounded-xl bg-slate-100 p-2">
              <Icon className="h-5 w-5 text-slate-700" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">{card.title}</h3>
          </div>
          <p className="mt-2 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
            {card.badge}
          </p>
        </div>
      </div>

      <div className="mt-4 space-y-3 text-slate-700">
        <p><span className="font-semibold text-slate-900">Где используется:</span> {card.use}</p>
        <p><span className="font-semibold text-slate-900">Как мыслить:</span> {card.thinking}</p>
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="mt-5 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
      >
        {open ? "Скрыть пример" : "Показать пример"}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
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

export default function JavaScriptHintCards() {
  const [activeGroup, setActiveGroup] = useState("all");
  const [query, setQuery] = useState("");

  const visibleCards = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return allCards.filter(card => {
      const matchesGroup = activeGroup === "all" || groups.find(g => g.title === card.group)?.id === activeGroup;
      const haystack = `${card.title} ${card.badge} ${card.use} ${card.thinking} ${card.group}`.toLowerCase();
      const matchesQuery = !normalizedQuery || haystack.includes(normalizedQuery);
      return matchesGroup && matchesQuery;
    });
  }, [activeGroup, query]);

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">JavaScript шпаргалка</p>
          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Интерактивные карточки-подсказки</h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Выбирай группу, открывай примеры и задавай себе главный вопрос: что у меня есть, что нужно получить, и какой инструмент для этого подходит?
          </p>
        </header>

        <section className="mt-6 grid gap-4 md:grid-cols-4">
          <button
            onClick={() => setActiveGroup("all")}
            className={`rounded-2xl border p-4 text-left transition ${activeGroup === "all" ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-white hover:border-slate-400"}`}
          >
            <p className="font-bold">Все карточки</p>
            <p className={`mt-1 text-sm ${activeGroup === "all" ? "text-slate-200" : "text-slate-500"}`}>Общий обзор</p>
          </button>

          {groups.map(group => {
            const Icon = group.icon;
            const active = activeGroup === group.id;
            return (
              <button
                key={group.id}
                onClick={() => setActiveGroup(group.id)}
                className={`rounded-2xl border p-4 text-left transition ${active ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-white hover:border-slate-400"}`}
              >
                <Icon className="h-5 w-5" />
                <p className="mt-2 font-bold">{group.title}</p>
                <p className={`mt-1 text-sm ${active ? "text-slate-200" : "text-slate-500"}`}>{group.description}</p>
              </button>
            );
          })}
        </section>

        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
          <Search className="h-5 w-5 text-slate-400" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Поиск: filter, объект, return, сумма..."
            className="w-full bg-transparent text-base outline-none placeholder:text-slate-400"
          />
        </div>

        <main className="mt-6 grid gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visibleCards.map(card => (
              <Card key={`${card.group}-${card.title}`} card={card} />
            ))}
          </AnimatePresence>
        </main>

        {visibleCards.length === 0 && (
          <div className="mt-6 rounded-2xl bg-white p-8 text-center text-slate-600 shadow-sm">
            Ничего не найдено. Попробуй другой запрос.
          </div>
        )}

        <footer className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black">Главный алгоритм мышления</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-4">
            {[
              ["1", "Что у меня есть?", "Например: массив products."],
              ["2", "Что нужно получить?", "Часть списка, новый список, сумму или действие?"],
              ["3", "Что проверяю у каждого элемента?", "Например: product.category === 'anime'."],
              ["4", "Какой инструмент подходит?", "filter, map, reduce или forEach."]
            ].map(([number, title, text]) => (
              <div key={number} className="rounded-2xl bg-slate-50 p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 font-bold text-white">{number}</div>
                <p className="mt-3 font-bold">{title}</p>
                <p className="mt-1 text-sm text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
