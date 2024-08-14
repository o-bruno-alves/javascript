const cart = {
    userId: 1,
    date: new Date().toISOString().split('T')[0],
    products: []
  };
  
  const getProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao obter dados', error);
      return [];
    }
  };
  
  const createProductCard = (product) => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
  
    productCard.innerHTML = `
      <div class="product-img"><img src="${product.image}"></div>
      <div class="product-container">
        <h3 class="product-title">${product.title}</h3>
        <p class="product-price">Price: ${product.price}€</p>
        <button class="btn btn-add-cart">Add to cart</button>
      </div>
    `;
  
    const addToCartBtn = productCard.querySelector('.btn-add-cart');
    addToCartBtn.addEventListener('click', () => {
      addToCart(product.id);
    });
  
    return productCard;
  };
  
  const addToCart = (productId) => {
    const productsInCart = cart.products.find((product) => product.id === productId);
    if (!productsInCart) {
      cart.products.push({ productId, quantity: 1 });
    } else {
      productsInCart.quantity++;
    }
    updateCart();
  };
  
  const updateCart = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/carts/7', {
        method: 'PUT',
        body: JSON.stringify(cart),
        headers: {
          'Content-Type': 'application/json'
        },
      });
  
      if (!response.ok) {
        throw new Error('Erro a processar a pedido');
      }
  
      const data = await response.json();
      console.log('Carrinho actualizado', data);
    } catch (error) {
      console.error('Erro a actualizar carrinho:', error);
    }
  };
  
  const loadProducts = async () => {
    try {
      const container = document.querySelector('.container');
      const products = await getProducts();
  
      if (!products || products.length === 0) {
        console.log('Não foi encontrado nenhum produto');
        return;
      }
  
      products.forEach((product) => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
      });
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
    }
  };
  
  loadProducts();