const product1 = { id: 1, name: 'Product 1', price: 10 };
const product2 = { id: 2, name: 'Product 2', price: 20 };
const product3 = { id: 3, name: 'Product 3', price: 30 };

class Ecommerce {
  constructor() {
    this.products = [];
    this.cart = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  setProductPrice(productId, price) {
    const product = this.products.find(product => product.id === productId)
    if (product) {
      product.price = price
    }
  }

  getAllProducts() {
    return this.products;
  }

  getAllProductsNames() {
    return this.products.map(product => product.name).join(';');
  }

  getProductById(productId) {
    return this.products.find(product => product.id === productId);
  }

  getProductByName(productName) {
    return this.products.find(product => product.name === productName);
  }

  getProductsByPrice(initialPrice, finalPrice) {
    return this.products.filter(product => product.price >= initialPrice && product.price <= finalPrice);
  }

  addProductToCart(product) {
    this.cart.push(product);
  }

  getCart() {
    return this.cart;
  }

  getCartTotalPrice() {
    return this.cart.reduce((acc, product) => acc + product.price, 0);
  }
}


// Utilização:
const ecommerce = new Ecommerce();

ecommerce.addProduct(product1);
ecommerce.addProduct(product2);
ecommerce.addProduct(product3);

console.log(ecommerce.getAllProducts());

console.log(ecommerce.getAllProductsNames());

ecommerce.addProductToCart(product1);
ecommerce.addProductToCart(product2);

console.log(ecommerce.getCart());

console.log(ecommerce.getCartTotalPrice());