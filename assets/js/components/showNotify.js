
export let showNotify = function(){
let carrito = []

let notify = document.querySelector('.notify')

function addCart(id) {
    let prduct = db.filter(item => {
        return item.id === id
    });
    if(prduct){
        carrito.push(prduct)
    }
    notify.innerHTML = carrito.length
}
}
showNotify()
