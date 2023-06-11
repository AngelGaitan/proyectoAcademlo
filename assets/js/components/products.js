 function products (products) {
     const db = [...products]

     function Prtproducts(products){
          const productsDom = document.querySelector('.products__container')
          let htmlProduct = ''

          for (const product of db) {
               htmlProduct += `<article class="product">
               <div class="product__image">
                 <img src="${product.image}" alt="${product.name}">
               </div>
               
               <div class="product__content">
                 <div class="container_desc">
                 <button type="button" class="product__btn add--to--cart" data-id="${product.id}">
                   <i class='bx bx-cart-add'></i>
                 </button>
                 <div class="prod__container">
                 <div class="caja caja1"><span class="product__price fila">costo:$ ${product.price}</span></div>
                 <div class="caja caja2"><span class="product__stock fila">Disponibles: ${product.quantity}</span></div>
                 <div class="caja caja3"><h3 class="product__title">${product.name}</h3></div>
                 <div class="caja caja4"><details><summary>descripción del producto</summary>
                   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit reprehenderit excepturi, in ipsa sapiente sequi dignissimos qui dolorem necessitatibus fugiat modi corrupti exercitationem suscipit nostrum quibusdam blanditiis quo explicabo deserunt.</p>
                 </details></div>
                 </div>
               </div>
               </div>
             </article>`
          }
          productsDom.innerHTML = htmlProduct
     }
     Prtproducts()
     return {
          db,
          Prtproducts
     }
    }

  export default products


