import Data from "./Data.js";
const faqs = document.getElementById("faqs");
Data.forEach((item) => {
  const faq = document.createElement("div");
  faq.classList.add("faq");
  faq.innerHTML = `<div class="question"><h2>${item.question}</h2></div>
    <div class="answer"><p>${item.answer}</p></div>`;
  faqs.appendChild(faq);
});
const question = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".answer");
question.forEach((faq, index) => {
  faq.addEventListener("click", () => {
    answer[index].classList.toggle("active");
  });
});
