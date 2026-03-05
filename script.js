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
      } 
      else if (target == 98) {
        finalNumber = "98%";
      } 
      else {
        finalNumber = target + "+";
      }

      counter.innerText = finalNumber;
    }
  };

  updateCount();
});

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 60; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 3,
    speedX: Math.random() * 0.5 - 0.25,
    speedY: Math.random() * 0.5 - 0.25
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.x += p.speedX;
    p.y += p.speedY;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0,255,150,0.7)";
    ctx.fill();

    if (p.x > canvas.width) p.x = 0;
    if (p.x < 0) p.x = canvas.width;
    if (p.y > canvas.height) p.y = 0;
    if (p.y < 0) p.y = canvas.height;
  });

  requestAnimationFrame(animateParticles);
}

animateParticles();