export let showCart = function(){
    const btnCart = document.querySelector('.btn--cart')
    const cart = document.querySelector('.cart')

    btnCart.addEventListener('click', () => {
        cart.classList.toggle('arrow')
    })
}
showCart()