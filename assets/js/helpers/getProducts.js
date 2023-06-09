/*export let getProducts = function() {
    window.fetch('https://ecommercebackend.fundamentos-29.repl.co/')
    .then((res) => res.json())
    .then((data) => data)  
    .catch((err) =>{console.log(err)})
}

getProducts() */

export  let getProducts =  async () => {
    
    return window.fetch('https://ecommercebackend.fundamentos-29.repl.co/')
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => {console.log(err)})
  }
  
   
  
  
