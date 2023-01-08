const mainContainer = document.querySelector(".main-container");
const tyContainer = document.querySelector(".thankYou");
const submitRating = document.querySelector(".submit");

submitRating.addEventListener("click", (e) => {
  tyContainer.classList.remove("hidden");
  mainContainer.style.display = "none";
});

const rates = document.querySelectorAll(".select-rating");
const rating = document.querySelector("#rating");

rates.forEach((rate) => {
  rate.addEventListener("click", (e) => {
    rating.innerHTML = rate.innerHTML;
  });
});
