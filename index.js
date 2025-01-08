const producto = document.querySelector(".products-grid");
const mobile = document.querySelector(".product-container-mobile");
const json = "./data.json";
const empty_cart = document.querySelector(".emppty-cart");
const cart_container=document.querySelectorAll('.cart-container')

fetch(json)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.map((product) => {
      const { image, name, category, price } = product;
      producto.innerHTML += `
<div class="product">
<img
src="${image.desktop}"
alt=""
class="product-img"
/>
<a class="cart-container" href="#">
<img src="./assets/images/icon-add-to-cart.svg" alt="" class="cart-img" />
<h5 class="add-to-cart-text">Add to cart</h5>
</a>
<div class="product-cat-text">
<h5 class="product-type">${category}</h5>
<h5>${name}</h5>
<h5 class="product-price">${price}</h5>
</div>
</div>`;


      mobile.innerHTML += ` <div class="product-mobile">
          <img src="${image.mobile}" alt="">
          <a href="" class="cart-container-mobile"> <img src="./assets/images/icon-add-to-cart.svg" alt="">
          <h5>Add to Cart</h5>
          </a>
          <div class="mobile-text-container">

            <h5 class="product-mobile-text"> ${category}</h5>
            <h5 class="product-mobile-text"> ${name}</h5>
            <h5 class="product-mobile-text"> ${price}</h5>
          </div>
         
        </div>`;
    });
  }).catch((error)=>{
    console.log(error);
  });
