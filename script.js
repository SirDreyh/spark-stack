const cards = document.querySelectorAll('.work-card');

window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const trigger = window.innerHeight - 100;

    if (cardTop < trigger) {
      card.classList.add('show');
    }
  });
});
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const closeBtn = document.querySelector(".close-btn");

// Open menu
hamburger.addEventListener("click", () => {
  navLinks.classList.add("active");
});

// Close menu
if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
}