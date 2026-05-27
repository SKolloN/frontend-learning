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
  return products.filter(function (product) {
    return product.inStock === true
  })
}

function getProductNames(products) {
  return products.map(function (product) {
    return product.name
  })
}

function getTotalPrice(products) {
  // вернуть сумму цен всех товаров
  const total = products.reduce((sum, item) => sum + item.price, 0);
  return total
}

console.log(getAvailableProducts(products))
console.log(getProductNames(products))
console.log(getTotalPrice(products))