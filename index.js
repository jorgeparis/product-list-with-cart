

const carts=document.querySelectorAll('.cart-container')
const modal=document.querySelector('.modal')

carts.forEach(cart => {
    cart.addEventListener('click',()=>{
       modal.showModal()
    })
});