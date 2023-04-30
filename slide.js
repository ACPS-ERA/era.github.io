const sliderImages = document.querySelector('.slider-images');
const sliderControls = document.querySelector('.slider-controls');
const sliderControlNext = document.querySelector('.slider-control-next');
const sliderControlBack = document.querySelector('.slider-control-back');

let scrollAmount = 0;
const imageWidth = sliderImages.querySelector('img').clientWidth;

sliderControlNext.addEventListener('click', () => {
  if (scrollAmount < (sliderImages.scrollWidth - imageWidth)) {
    scrollAmount += imageWidth;
    sliderImages.scrollTo({
      top: 0,
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
});

sliderControlBack.addEventListener('click', () => {
  if (scrollAmount > 0) {
    scrollAmount -= imageWidth;
    sliderImages.scrollTo({
      top: 0,
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
});
