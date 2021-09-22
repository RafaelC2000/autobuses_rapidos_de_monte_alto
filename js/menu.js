const menu = document.getElementById("menu")
const nav = document.getElementById("nav")
const nav_elem1 = document.querySelector(".nav_elem1")
const nav_elem2 = document.querySelector(".nav_elem2")
const nav_elem3 = document.querySelector(".nav_elem3")
const nav_elem4 = document.querySelector(".nav_elem4")

menu.addEventListener('click', ()=>{
    nav.classList.toggle("menu_on")
})

nav_elem1.addEventListener('click', ()=>{
    nav.classList.toggle("menu_on")
})

nav_elem2.addEventListener('click', ()=>{
    nav.classList.toggle("menu_on")
})

nav_elem3.addEventListener('click', ()=>{
    nav.classList.toggle("menu_on")
})

nav_elem4.addEventListener('click', ()=>{
    nav.classList.toggle("menu_on")
})