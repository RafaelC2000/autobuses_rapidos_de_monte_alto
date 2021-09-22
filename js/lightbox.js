const imgs = document.querySelectorAll(".bus_img")
const img_light = document.querySelector(".add_img")
const cont_light = document.querySelector(".light_img")

const img_zoom = (val) => {
    img_light.src = val
    console.log(val)
    cont_light.classList.toggle('show')
}

imgs.forEach( imagen => {
    imagen.addEventListener('click', ()=>{
        let i = imagen.getAttribute('src')
        img_zoom(i)
    })
})

cont_light.addEventListener('click', (e) => {
    if(e.target !==img_light){
        cont_light.classList.toggle('show')
    }
})