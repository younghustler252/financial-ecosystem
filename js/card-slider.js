const loanSlider = document.querySelector('.loan-slider');
const prevBtn = document.getElementById('loanPrev');
const nextBtn = document.getElementById('loanNext');

let currentSlide = 0;
const cardWidth = 374; // card + gap space

function updateSlidePosition() {
  const visibleCards = Math.floor(window.innerWidth / cardWidth);
  const maxSlide = loanSlider.children.length - visibleCards;
  currentSlide = Math.max(0, Math.min(currentSlide, maxSlide));
  loanSlider.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
}

nextBtn.addEventListener('click', () => {
  currentSlide++;
  updateSlidePosition();
});

prevBtn.addEventListener('click', () => {
  currentSlide--;
  updateSlidePosition();
});

window.addEventListener('resize', updateSlidePosition);
updateSlidePosition();