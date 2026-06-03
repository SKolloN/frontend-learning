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
    // если товар в наличии — вернуть "Товар в наличии"
    // иначе — вернуть "Товара нет"
    if (product.inStock === true) {
        return 'Товар в наличии';
    } else {
        return 'Товара нет';
    }
}

console.log(getProductStatus(products[0]));
console.log(getProductStatus(products[1]));



function getPriceLevel(product) {
    // если цена меньше 3000 — вернуть "Обычный товар"
    // если цена от 3000 до 4000 — вернуть "Дорогой товар"
    // если цена больше 4000 — вернуть "Очень дорогой товар"
    if (product.price < 3000) {
        return 'Обычный товар';
    } else if (product.price > 4000) {
        return 'Очень дорогой товар';
    } else {
        return 'Дорогой товар';
    }
}

console.log(getPriceLevel(products[0]));
console.log(getPriceLevel(products[1]));
console.log(getPriceLevel(products[2]));


function canBuyProduct(product, userMoney) {
  // вернуть true, если:
  // 1. товар есть в наличии
  // 2. денег пользователя хватает на покупку
  //
  // иначе вернуть false

  if (product.inStock === true && userMoney >= product.price){
    return true;
  } else{
    return false
  }
}

console.log(canBuyProduct(products[0], 3000));
console.log(canBuyProduct(products[1], 5000));
console.log(canBuyProduct(products[2], 3000));
console.log(canBuyProduct(products[2], 5000));







/**
 * Возвращает текстовый статус товара.
 *
 * Если product.inStock === true, значит товар есть в наличии.
 * Если false — товара нет.
 *
 * Здесь используем тернарный оператор:
 * условие ? значение_если_true : значение_если_false
 */
function getProductStatus(product) {
  return product.inStock ? "Товар в наличии" : "Товара нет";
}

console.log(getProductStatus(products[0])); // Товар в наличии
console.log(getProductStatus(products[1])); // Товара нет

/**
 * Определяет уровень цены товара.
 *
 * Важно:
 * После первого return функция завершается.
 *
 * Поэтому если цена меньше 3000, функция сразу вернёт "Обычный товар"
 * и дальше код уже не пойдёт.
 *
 * Если код дошёл до второго if, значит цена уже точно >= 3000.
 * Поэтому нам достаточно проверить только product.price <= 4000.
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

console.log(getPriceLevel(products[0])); // Обычный товар
console.log(getPriceLevel(products[1])); // Дорогой товар
console.log(getPriceLevel(products[2])); // Очень дорогой товар

/**
 * Проверяет, может ли пользователь купить товар.
 *
 * Купить можно только если:
 * 1. товар есть в наличии;
 * 2. денег пользователя хватает.
 *
 * product.inStock уже является boolean:
 * true или false.
 *
 * userMoney >= product.price тоже возвращает boolean:
 * true или false.
 *
 * Оператор && вернёт true только если оба условия true.
 */
function canBuyProduct(product, userMoney) {
  return product.inStock && userMoney >= product.price;
}

console.log(canBuyProduct(products[0], 3000)); // true
console.log(canBuyProduct(products[1], 5000)); // false
console.log(canBuyProduct(products[2], 3000)); // false
console.log(canBuyProduct(products[2], 5000)); // true

/**
 * Дополнительная задача.
 *
 * Возвращает короткую рекомендацию по товару.
 *
 * Порядок условий очень важен:
 * Сначала проверяем, доступен ли товар.
 * Если товара нет — сразу возвращаем "Недоступен".
 *
 * Только после этого проверяем цену.
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

console.log(getProductLabel(products[0])); // Можно брать
console.log(getProductLabel(products[1])); // Недоступен
console.log(getProductLabel(products[2])); // Дорого


