document.addEventListener('DOMContentLoaded', () => {
  // Initialize Typed.js for the "I'm a" text animation
  new Typed('.text', {
    strings: ['Full Stack Developer', 'Web Developer', 'Software Engineer'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
  });

  // Animate skill bars based on data-percent attribute
  const skillBars = document.querySelectorAll('.skill-bar');
  skillBars.forEach(bar => {
    const percent = bar.getAttribute('data-percent');
    bar.querySelector('span').style.width = `${percent}%`;
  });
});
