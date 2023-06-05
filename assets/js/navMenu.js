

let menu =  document.querySelector('.btn--menu');

let navMenu = document.querySelector('.nav_menu');

menu.addEventListener('click',() => {
    navMenu.classList.toggle('arrow')
} )


let x = document.querySelector('.btn--close')


x.addEventListener('click', () => {
navMenu.classList.toggle('arrow')
})



/*
menu.onclick = function () {
    document.classList.toggle("arrow")
    if(document.classList.contains("arrow")){
        
    } else {
    
    }
}; */


    
