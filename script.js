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

// Toggle menu
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Close when clicking links
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  });
});
const testimonials = document.querySelectorAll('.testimonial');
let current = 0;

setInterval(() => {
    testimonials[current].classList.remove('active');
    current = (current + 1) % testimonials.length;
    testimonials[current].classList.add('active');
}, 5000);
const counters = document.querySelectorAll(".stat-number");

counters.forEach(counter => {

  const target = counter.getAttribute("data-target");

  if (!target) return; // Skip 24/7

  const updateCount = () => {
    const current = +counter.innerText;
    const increment = target / 100;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCount, 20);
    } else {
      // Format final number
      let finalNumber = target;

      if (target >= 1000000) {
        finalNumber = "$" + (target / 1000000) + "M+";
      } else {
        finalNumber = target + "+";
      }

      counter.innerText = finalNumber;
    }
  };

  updateCount();
});