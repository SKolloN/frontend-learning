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

/**
 * Возвращает текстовый статус товара.
 *
 * product.inStock — это boolean:
 * true — товар есть;
 * false — товара нет.
 *
 * Тернарный оператор:
 * условие ? результат_если_true : результат_если_false
 */
function getProductStatus(product) {
  return product.inStock ? "Товар в наличии" : "Товара нет";
}

/**
 * Определяет уровень цены товара.
 *
 * Здесь используется ранний return.
 * Если условие сработало, функция сразу завершится.
 */
function getPriceLevel(product) {
  if (product.price < 3000) {
    return "Обычный товар";
  }

  if (product.price <= 4000) {
    return "Дорогой товар";
  }

  return "Очень дорогой товар";
}

/**
 * Проверяет, может ли пользователь купить товар.
 *
 * Купить можно, если:
 * 1. товар есть в наличии;
 * 2. денег хватает.
 *
 * && означает "и".
 */
function canBuyProduct(product, userMoney) {
  return product.inStock && userMoney >= product.price;
}

/**
 * Возвращает короткую рекомендацию по товару.
 *
 * Порядок условий важен:
 * сначала проверяем наличие,
 * потом уже цену.
 */
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