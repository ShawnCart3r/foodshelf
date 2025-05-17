  // Toggle hamburger menu
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  // Toggle dropdowns on mobile
  const dropdownToggles = document.querySelectorAll('.has-dropdown > a');

  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault(); // only block on mobile
        const dropdown = toggle.nextElementSibling;
        dropdown.classList.toggle('open');
      }
    });
  });
