const faqs = document.querySelectorAll(".faq");
const icons = document.querySelector(".icons");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
