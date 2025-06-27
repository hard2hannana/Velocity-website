document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide');
      } else {
        entry.target.classList.remove('slide');
      }
    });
  }, {
    threshold: 0.5
  });

  document.querySelectorAll('.animate-on-scroll').forEach(element => {
    observer.observe(element);
  });
});  

function scrollAndReload() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      location.reload();
    }, 100); // delay long enough to let scroll complete
  }
  
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });