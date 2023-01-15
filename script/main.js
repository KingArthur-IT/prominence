//mobile menu
const button = document.querySelector(".burger");

button?.addEventListener("click", () => {
  button.classList.toggle("active");
  document.querySelector('.menu').classList.toggle('opened');
});

//ACCORDEON
var reviewsHomeMoreBtn = document.querySelector(".reviews__more-btn");

reviewsHomeMoreBtn?.addEventListener('click', () => {
  reviewsHomeMoreBtn.classList.toggle('active');
  const panel = document.querySelector('.reviews__list .more-list')
  if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
  } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
  };
})
