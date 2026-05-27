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
]

function getAvailableProducts(products) {
  // вернуть только товары, которые есть в наличии
}

function getProductNames(products) {
  // вернуть массив только с названиями товаров
}

function getTotalPrice(products) {
  // вернуть сумму цен всех товаров
}

console.log(getAvailableProducts(products))
console.log(getProductNames(products))
console.log(getTotalPrice(products))