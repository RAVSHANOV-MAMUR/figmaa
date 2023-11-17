let elButton = document.querySelector(".nav__btn");
let elModal = document.querySelector(".modal");
let elModalExit = document.querySelector(".modal__exit");
let hero = document.querySelector(".hero");


elButton.addEventListener("click", ()=> {
    elModal.classList.toggle("blok")
})

elModalExit.addEventListener("click", ()=> {
    elModal.classList.remove("blok")
})

elButton.addEventListener("click", ()=> {
    hero.classList.toggle("hero2")
})

elModalExit.addEventListener("click", ()=> {
    hero.classList.remove("hero2")
})