const q1 = document.getElementById("q1")
const q2 = document.getElementById("q2")

const a1 = document.querySelector(".a1")
const a2 = document.querySelector(".a2")

const ia1 = document.querySelector(".ia1")
const ir1 = document.querySelector(".ir1")
const ia2 = document.querySelector(".ia2")
const ir2 = document.querySelector(".ir2")


q1.addEventListener('click', () => {
    a1.classList.toggle("a_before")
    ia1.classList.toggle("i_remove")
    ir1.classList.toggle("i_show")
})

q2.addEventListener('click', () => {
    a2.classList.toggle("a_before")
    ia2.classList.toggle("i_remove")
    ir2.classList.toggle("i_show")
})