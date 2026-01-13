document.addEventListener('DOMContentLoaded', () => {
  // 1. Navbar Active Link Highlighting
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });

  // 2. Smooth Reveal Animation on Scroll
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  const revealElements = document.querySelectorAll('.glass-card, .section-title, .hero-content');
  revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s ease-out';
    revealObserver.observe(el);
  });

  // Add class for the revealed state via JS (or could be in CSS)
  const styleSheet = document.createElement("style");
  styleSheet.innerText = `
        .revealed {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
  document.head.appendChild(styleSheet);

  // 3. Mobile Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinksContainer = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      // Simple toggle for demo purposes
      if (navLinksContainer.style.display === 'flex') {
        navLinksContainer.style.display = 'none';
      } else {
        navLinksContainer.style.display = 'flex';
        navLinksContainer.style.flexDirection = 'column';
        navLinksContainer.style.position = 'absolute';
        navLinksContainer.style.top = '70px';
        navLinksContainer.style.right = '0';
        navLinksContainer.style.width = '100%';
        navLinksContainer.style.background = 'rgba(5, 5, 5, 0.95)';
        navLinksContainer.style.padding = '20px';
        navLinksContainer.style.backdropFilter = 'blur(10px)';
      }
    });
  }

  // 4. Contact Form Handler (Visual feedback)
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button');
      const originalText = btn.innerText;

      btn.innerText = 'Sent Successfully!';
      btn.style.background = '#4cc9f0'; // Accent color

      setTimeout(() => {
        btn.innerText = originalText;
        btn.style.background = ''; // Revert to gradient
        form.reset();
      }, 3000);
    });
  }
});
