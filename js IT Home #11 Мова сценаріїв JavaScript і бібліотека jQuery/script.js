function getProduct() {
    fetch('https://fakestoreapi.com/products/1')
      .then(response => response.json())
      .then(data => {
        let productInfo = document.getElementById('productInfo');
        productInfo.innerHTML = `
          <h3>${data.title}</h3>
          <p>${data.description}</p>
          <p><b>Ціна:</b> ${data.price}</p>
          <p><b>Категорія:</b> ${data.category}</p>
        `;
      })
  }

  function changeStyle() {
    let productInfo = document.getElementById('productInfo');
    productInfo.style.backgroundImage = 'linear-gradient(to right, #9EEFE1 0%, #4830F0 51%, #9EEFE1 100%)';
    productInfo.style.fontFamily = 'Segoe UI';
    productInfo.style.borderRadius = '15px';
    productInfo.style.backgroundSize =  '200% auto';
    productInfo.style.paddingLeft = '30px';
    productInfo.style.paddingTop = '10px';
    productInfo.style.paddingBottom = '10px';
    productInfo.style.letterSpacing = '2px';
  }