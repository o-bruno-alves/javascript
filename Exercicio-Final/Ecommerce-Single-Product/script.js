async function getProduct(productId) {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao obter produto:', error);
        return null;
    }
  }
  
  function createProduct(product) {
    const container = document.querySelector('.product-container');
    container.innerHTML = `
        <div class="product-image"><img src="${product.image}"></div>
        <div class="product-info">
            <span class="product-id">Product id: ${product.id}</span>
            <h3 class="product-title">${product.title}</h3>
            <p class="product-category">${product.category}</p>
            <p class="product-price">Price: ${product.price}€</p>
            <p class="product-description">${product.description}</p>
            <p class="quantity-label">Quantity</p>
            <input type="number" class="quantity-input" value="1" min="1" max="10">
            <button class="btn-add-to-cart">Add To Cart</button>
        </div>
    `;
    return container;
  }
  
  function createRelatedProduct(product) {
    const relatedProductCard = document.createElement('div');
    relatedProductCard.className = 'related-product-card';
    relatedProductCard.innerHTML = `
        <div class="related-product-image"><img src="${product.image}"></div>
        <div class="related-product-info">
            <h3 class="related-product-title">${product.title}</h3>
            <p class="related-product-price">${product.price}€</p>
            <button class="btn-add-to-cart">Add To Cart</button>
        </div>
    `;
    return relatedProductCard;
  }
  
  async function loadRelatedProducts(categoryId) {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/category/${categoryId}`);
        const relatedProducts = await response.json();
        const relatedContainer = document.querySelector('.related-products');
        relatedProducts.slice(1, 5).forEach(product => {
            const relatedProductCard = createRelatedProduct(product);
            relatedContainer.appendChild(relatedProductCard);
        });
    } catch (error) {
        console.error('Erro ao obter produtos relacionados:', error);
    }
  }
  
  async function loadProduct() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id') || 1;
    if (!productId) {
        console.error('ID do produto não encontrado na URL');
        return;
    }
  
    const product = await getProduct(productId);
    if (!product) {
        console.error('Erro ao obter produto');
        return;
    }
  
    createProduct(product);
    loadRelatedProducts(product.category);
  }
  
  loadProduct();
  
  const footerDate = new Date();
  const footerText = document.querySelector('.copywrite');
  footerText.textContent = `Copyright ${footerDate.getFullYear()}`;