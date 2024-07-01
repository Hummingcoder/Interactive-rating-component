const container = document.querySelector("article");
const btn = document.querySelector(".btn");
const num = document.querySelector(".rating-num");
const stars = document.querySelectorAll(".rate");

let n = "";

stars.forEach((star) => {
  star.addEventListener("click", () => {
    stars.forEach((item) => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      }
    });

    star.classList.add("active");
    n = star.textContent;
  });
});

btn.addEventListener("click", () => {
  container.classList.toggle("rated");
  num.innerHTML = n;
});
