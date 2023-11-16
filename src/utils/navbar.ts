export function navbarInteractions() {
  // Navbar scroll
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.nav_component'); // Replace with your navbar's class or ID
    if (navbar) {
      if (window.scrollY > 0) {
        navbar.classList.add('navbar-shadow');
      } else {
        navbar.classList.remove('navbar-shadow');
      }
    }
  });
}
