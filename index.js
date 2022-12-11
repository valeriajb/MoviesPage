const btnNext = document.querySelector(".icon-slider")
const sliderContainer = document.querySelector(".slider-movies-container")
const btnModeColor = document.querySelector(".button-toggle")
const elementsActives = document.querySelectorAll(".navBar,.item-categorie,.profile-text,.fa-caret-down,.container-toggle,.menuBar,.icon-menu")

btnModeColor.addEventListener("click", () => {
    elementsActives.forEach((element) => {
        element.classList.toggle("active")
    })
    btnModeColor.classList.toggle("active")
})


const addActiveMode = () => {

}