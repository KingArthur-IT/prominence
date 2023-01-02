//mobile menu
const button = document.querySelector(".burger");

button?.addEventListener("click", () => {
  button.classList.toggle("active");
  document.querySelector('.menu').classList.toggle('opened');
});