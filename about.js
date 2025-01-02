// JavaScript to Add Smooth Scrolling
document.addEventListener("DOMContentLoaded", () => {
    const destinations = document.querySelectorAll(".destination");
  
    // Lazy load animation on scroll
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    }, { threshold: 0.2 });
  
    destinations.forEach(dest => observer.observe(dest));
  });
  