

let menu =  document.querySelector('.btn--menu');

let navMenu = document.querySelector('.nav_menu');

menu.addEventListener('click',() => {
    navMenu.classList.toggle('arrow')
} )


let x = document.querySelector('.btn--close')


x.addEventListener('click', () => {
navMenu.classList.toggle('arrow')
})


// ahora vamos a hacer el dark mode 

let darktheme = document.querySelector('#dark')

darktheme.addEventListener('click', () => {
    document.body.classList.toggle("dark_theme")
    
    if(document.body.classList.contains("dark_theme")){
     darktheme.innerHTML = "<i class='bx bxs-sun' ></i>"
    }else{
        darktheme.innerHTML = "<i class='bx bxs-moon'></i>"   
    }
})


let rotation = document.querySelector('.rot')

rotation.addEventListener('click', () => {
    document.classList.contains('rot:hover')
})
    
