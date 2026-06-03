// Modern Portfolio JavaScript

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Skill Bar Animation
const skillBars = document.querySelectorAll('.skill-progress');
const animateSkillBars = () => {
  skillBars.forEach(bar => {
    const barPosition = bar.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
    
    if (barPosition < screenPosition) {
      const progress = bar.getAttribute('data-progress');
      bar.style.width = progress + '%';
    }
  });
};

window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);

// Scroll Reveal Animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear');
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section, .hero-text, .hero-image, .project-card, .education-item, .cert-item').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const highlightNavLink = () => {
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
};

window.addEventListener('scroll', highlightNavLink);

// Typing Animation for Hero Section
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
  const text = heroTitle.textContent;
  heroTitle.textContent = '';
  let i = 0;

  const typeWriter = () => {
    if (i < text.length) {
      heroTitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  };

  setTimeout(typeWriter, 500);
}

// Form Submission (Basic validation)
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const inputs = contactForm.querySelectorAll('input, textarea');
    let isValid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        input.style.borderColor = '#ef4444';
      } else {
        input.style.borderColor = 'rgba(255, 255, 255, 0.1)';
      }
    });

    if (isValid) {
      alert('Thank you for your message! I will get back to you soon.');
      contactForm.reset();
    } else {
      alert('Please fill in all fields.');
    }
  });
}

// Project Card Hover Effect
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
});

// Add cursor trail effect (optional)
const createCursorTrail = () => {
  document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = e.pageX + 'px';
    trail.style.top = e.pageY + 'px';
    document.body.appendChild(trail);

    setTimeout(() => {
      trail.remove();
    }, 600);
  });
};

// Lazy load images
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
      imageObserver.unobserve(img);
    }
  });
});

lazyImages.forEach(img => imageObserver.observe(img));

// Console message
console.log(
  '%c👋 Hey there! Welcome to my portfolio!',
  'color: #6366f1; font-size: 18px; font-weight: bold;'
);
console.log(
  '%c💼 Like what you see? Let\'s connect!',
  'color: #8b5cf6; font-size: 14px;'
);
console.log(
  '%c📧 dhanushm0105@gmail.com',
  'color: #ec4899; font-size: 14px;'
);

// Initialize animations on page load
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  
  // Trigger initial animations
  animateSkillBars();
  highlightNavLink();
  
  // Add loading animation complete
  setTimeout(() => {
    document.querySelector('.hero')?.classList.add('loaded');
  }, 100);
});

// GitHub Stats Error Handling
const githubImages = document.querySelectorAll('.stat-card img');
githubImages.forEach(img => {
  img.addEventListener('error', function() {
    this.parentElement.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 2rem;">GitHub stats unavailable</p>';
  });
});

// Add tooltip functionality
const addTooltips = () => {
  const badges = document.querySelectorAll('.badge');
  badges.forEach(badge => {
    badge.addEventListener('mouseenter', function(e) {
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.textContent = this.textContent;
      document.body.appendChild(tooltip);
      
      const rect = this.getBoundingClientRect();
      tooltip.style.top = rect.top - 40 + 'px';
      tooltip.style.left = rect.left + rect.width / 2 + 'px';
    });
    
    badge.addEventListener('mouseleave', function() {
      document.querySelectorAll('.tooltip').forEach(t => t.remove());
    });
  });
};

// Initialize tooltips
addTooltips();

// Performance optimization - Debounce scroll events
const debounce = (func, wait = 10) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Apply debounce to scroll events
window.addEventListener('scroll', debounce(() => {
  highlightNavLink();
  animateSkillBars();
}, 10));

// Easter egg - Konami code
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
  konamiCode.push(e.key);
  konamiCode.splice(-konamiPattern.length - 1, konamiCode.length - konamiPattern.length);

  if (konamiCode.join('') === konamiPattern.join('')) {
    document.body.style.animation = 'rainbow 3s infinite';
    setTimeout(() => {
      document.body.style.animation = '';
    }, 3000);
  }
});
