document.addEventListener('DOMContentLoaded', () => {
  // Navigation Bar Scroll Effect
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        // Adjust scroll position slightly higher to account for fixed navbar
        const offsetTop = targetSection.offsetTop - 80;
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Reveal Animations on Scroll using IntersectionObserver
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      // Add 'active' class when element comes into viewport
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Optional: unobserve if you only want the animation to happen once
        // observer.unobserve(entry.target);
      }
    });
  };

  const revealOptions = {
    threshold: 0.1, // Trigger when 10% of the element is visible
    rootMargin: "0px 0px -50px 0px" // Trigger slightly before it hits the viewport bounds
  };

  const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
  
  revealElements.forEach(element => {
    revealObserver.observe(element);
  });

  // Subtly trigger reveal immediately for elements already in view on load
  setTimeout(() => {
    revealElements.forEach(element => {
      const rect = element.getBoundingClientRect();
      if(rect.top < window.innerHeight) {
        element.classList.add('active');
      }
    });
  }, 100);
});
