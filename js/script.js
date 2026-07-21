// ---------- Scroll animations ----------
if (window.AOS) {
  AOS.init({
    duration: 700,
    once: true,
    offset: 60,
  });
}

// ---------- Typing effect ----------
if (window.Typed && document.getElementById('typed')) {
  new Typed('#typed', {
    strings: [
      'Web Developer',
      'Second-Year Student',
      'AI Enthusiast',
      'Problem Solver',
    ],
    typeSpeed: 55,
    backSpeed: 30,
    backDelay: 1500,
    startDelay: 300,
    loop: true,
  });
}

// ---------- Mobile menu ----------
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (navToggle && mobileMenu) {
  navToggle.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden');

    if (isHidden) {
      mobileMenu.classList.remove('hidden');
      mobileMenu.classList.add('flex');
      navToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('flex');
      navToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
  });

  // Close mobile menu after tapping a link
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('flex');
      navToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });
}

// ---------- Nav background on scroll ----------
const navbar = document.getElementById('navbar');

if (navbar) {
  const setNavState = () => {
    if (window.scrollY > 20) {
      navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.25)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  };

  setNavState();
  window.addEventListener('scroll', setNavState, { passive: true });
}
