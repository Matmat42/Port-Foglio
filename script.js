document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector(".about-animate");
  
    if (!aboutSection) return;
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          aboutSection.classList.add("visible");
  
          // déclenche les animations des textes
          aboutSection.querySelectorAll(".reveal-title, .reveal-text").forEach(el => {
            el.style.animationPlayState = 'running';
          });
        }
      },
      { threshold: 0.3 }
    );
  
    observer.observe(aboutSection);
  });
  