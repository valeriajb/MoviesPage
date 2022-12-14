const btnNext = document.querySelectorAll(".icon-slider");
const sliderContainer = document.querySelectorAll(".slider-movies-container");
const btnModeColor = document.querySelector(".button-toggle");
const elementsActives = document.querySelectorAll(
  ".navBar,.item-categorie,.profile-text,.fa-caret-down,.container-toggle,.menuBar,.icon-menu"
);

let clickSlider = 1;

btnNext.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (clickSlider === 5) {
      sliderContainer[index].style.transform = `translateX(0px)`;
      clickSlider = 1;
    } else {
      sliderContainer[index].style.transform = `translateX(${
        clickSlider * -200
      }px)`;
      clickSlider++;
    }
  });
});

//ModeDark
btnModeColor.addEventListener("click", () => {
  elementsActives.forEach((element) => {
    element.classList.toggle("active");
    element.style.transition = ` all 1s ease-in`;
  });
  btnModeColor.classList.toggle("active");
});
