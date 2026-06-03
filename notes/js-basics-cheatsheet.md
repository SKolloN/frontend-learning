# JavaScript: базовая шпаргалка по условиям, функциям и объектам

## 1. `products` и `product`

```js
const products = [
  {
    id: 1,
    name: "Naruto Uzumaki",
    price: 2500,
    inStock: true,
  },
  {
    id: 2,
    name: "Monkey D. Luffy",
    price: 3100,
    inStock: false,
  },
];
```

`products` — это массив, то есть список товаров.

```js
products[0]
```

Это первый товар из массива.

```js
products[1]
```

Это второй товар из массива.

---

## 2. Параметр функции

```js
function getProductStatus(product) {
  return product.inStock ? "Товар в наличии" : "Товара нет";
}
```

`product` — это параметр функции.

Функция сама не знает, какой товар лежит в `product`.
Мы передаём товар при вызове функции.

```js
getProductStatus(products[0]);
```

Здесь происходит такая логика:

```js
product = products[0];
```

То есть внутри функции `product` становится первым товаром.

```js
getProductStatus(products[1]);
```

А здесь:

```js
product = products[1];
```

Теперь внутри функции `product` становится вторым товаром.

Главное правило:

```js
products // много товаров, массив
product  // один товар
```

---

## 3. Аргумент и параметр

```js
function sayHello(name) {
  console.log("Привет, " + name);
}

sayHello("Вадим");
```

`name` — параметр.

`"Вадим"` — аргумент.

Аргумент попадает в параметр:

```js
name = "Вадим";
```

То же самое с товарами:

```js
function getProductStatus(product) {
  console.log(product.name);
}

getProductStatus(products[0]);
```

Здесь:

```js
product = products[0];
```

---

## 4. `if`

`if` используется, когда нужно выполнить код только при определённом условии.

```js
const age = 18;

if (age >= 18) {
  console.log("Доступ разрешён");
}
```

Читается так:

```txt
Если age больше или равен 18, вывести "Доступ разрешён".
```

---

## 5. `if / else`

```js
const inStock = true;

if (inStock === true) {
  console.log("Товар в наличии");
} else {
  console.log("Товара нет");
}
```

Читается так:

```txt
Если товар в наличии — вывести "Товар в наличии".
Иначе — вывести "Товара нет".
```

---

## 6. `else if`

`else if` нужен, когда есть несколько условий.

```js
function getPriceLevel(product) {
  if (product.price < 3000) {
    return "Обычный товар";
  } else if (product.price >= 3000 && product.price <= 4000) {
    return "Дорогой товар";
  } else {
    return "Очень дорогой товар";
  }
}
```

Читается так:

```txt
Если цена меньше 3000 — обычный товар.
Иначе если цена от 3000 до 4000 — дорогой товар.
Иначе — очень дорогой товар.
```

---

## 7. `return`

`return` возвращает результат из функции и завершает её выполнение.

```js
function getPriceLevel(product) {
  if (product.price < 3000) {
    return "Обычный товар";
  }

  if (product.price <= 4000) {
    return "Дорогой товар";
  }

  return "Очень дорогой товар";
}
```

Важно:

```js
return
```

останавливает функцию.

Если первый `return` сработал, код ниже уже не выполнится.

---

## 8. `===`

`===` — строгое сравнение.

```js
product.inStock === true
```

Проверяет:

```txt
product.inStock точно равен true?
```

Пример:

```js
const age = 18;

console.log(age === 18);   // true
console.log(age === "18"); // false
```

Почему второй результат `false`?

Потому что:

```js
18
```

это число, а:

```js
"18"
```

это строка.

---

## 9. `!==`

`!==` означает “не равно”.

```js
const role = "user";

if (role !== "admin") {
  console.log("Ты не админ");
}
```

Читается так:

```txt
Если role не равен "admin", вывести "Ты не админ".
```

---

## 10. `!`

`!` означает “не”.

```js
if (!product.inStock) {
  return "Недоступен";
}
```

Читается так:

```txt
Если товар НЕ в наличии — вернуть "Недоступен".
```

Это то же самое, что:

```js
if (product.inStock === false) {
  return "Недоступен";
}
```

Но короче.

Пример:

```js
const isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Нужно войти");
}
```

Читается так:

```txt
Если пользователь НЕ вошёл — вывести "Нужно войти".
```

---

## 11. `&&`

`&&` означает “и”.

Оба условия должны быть `true`.

```js
function canBuyProduct(product, userMoney) {
  return product.inStock && userMoney >= product.price;
}
```

Читается так:

```txt
Можно купить, если:
товар есть в наличии И денег хватает.
```

Примеры:

```js
true && true   // true
true && false  // false
false && true  // false
false && false // false
```

---

## 12. `||`

`||` означает “или”.

Достаточно, чтобы хотя бы одно условие было `true`.

```js
const role = "admin";

if (role === "admin" || role === "manager") {
  console.log("Есть доступ");
}
```

Читается так:

```txt
Если role равен "admin" ИЛИ role равен "manager" — доступ есть.
```

Примеры:

```js
true || true   // true
true || false  // true
false || true  // true
false || false // false
```

---

## 13. Тернарный оператор

Тернарный оператор — короткая форма `if / else`.

```js
const status = product.inStock ? "Товар в наличии" : "Товара нет";
```

Читается так:

```txt
Если product.inStock true — вернуть "Товар в наличии".
Иначе — вернуть "Товара нет".
```

Обычный вариант:

```js
function getProductStatus(product) {
  if (product.inStock) {
    return "Товар в наличии";
  } else {
    return "Товара нет";
  }
}
```

Короткий вариант:

```js
function getProductStatus(product) {
  return product.inStock ? "Товар в наличии" : "Товара нет";
}
```

---

## 14. Сравнения

```js
>   // больше
<   // меньше
>=  // больше или равно
<=  // меньше или равно
=== // строго равно
!== // строго не равно
```

Примеры:

```js
2500 < 3000    // true
3100 >= 3000   // true
4200 <= 4000   // false
"18" === 18    // false
"admin" !== "user" // true
```

---

## 15. Хорошее решение задач

```js
const products = [
  {
    id: 1,
    name: "Naruto Uzumaki",
    price: 2500,
    category: "anime",
    inStock: true,
  },
  {
    id: 2,
    name: "Monkey D. Luffy",
    price: 3100,
    category: "anime",
    inStock: false,
  },
  {
    id: 3,
    name: "Batman",
    price: 4200,
    category: "comics",
    inStock: true,
  },
];

function getProductStatus(product) {
  return product.inStock ? "Товар в наличии" : "Товара нет";
}

function getPriceLevel(product) {
  if (product.price < 3000) {
    return "Обычный товар";
  }

  if (product.price <= 4000) {
    return "Дорогой товар";
  }

  return "Очень дорогой товар";
}

function canBuyProduct(product, userMoney) {
  return product.inStock && userMoney >= product.price;
}

function getProductLabel(product) {
  if (!product.inStock) {
    return "Недоступен";
  }

  if (product.price < 3000) {
    return "Можно брать";
  }

  if (product.price <= 4000) {
    return "Подумать";
  }

  return "Дорого";
}

console.log(getProductStatus(products[0])); // Товар в наличии
console.log(getProductStatus(products[1])); // Товара нет

console.log(getPriceLevel(products[0])); // Обычный товар
console.log(getPriceLevel(products[1])); // Дорогой товар
console.log(getPriceLevel(products[2])); // Очень дорогой товар

console.log(canBuyProduct(products[0], 3000)); // true
console.log(canBuyProduct(products[1], 5000)); // false
console.log(canBuyProduct(products[2], 3000)); // false
console.log(canBuyProduct(products[2], 5000)); // true

console.log(getProductLabel(products[0])); // Можно брать
console.log(getProductLabel(products[1])); // Недоступен
console.log(getProductLabel(products[2])); // Дорого
```

---

## 16. Главное правило на сейчас

Сначала пиши понятно:

```js
if (product.inStock === true) {
  return "Товар в наличии";
} else {
  return "Товара нет";
}
```

Потом можно сокращать:

```js
return product.inStock ? "Товар в наличии" : "Товара нет";
```

Сначала понимание.
Потом красота.
