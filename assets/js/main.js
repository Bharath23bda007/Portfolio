function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");
  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}
window.onscroll = function () { headerShadow(), themeToggle() };
function headerShadow() {
  const navHeader = document.getElementById("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "60px";
    navHeader.style.lineHeight = "60px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "80px";
    navHeader.style.lineHeight = "80px";
  }
}
function themeToggle() {
  const themeToggle = document.getElementById("themeToggle");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    themeToggle.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    themeToggle.style.height = "60px";
    themeToggle.style.lineHeight = "60px";
  } else {
    themeToggle.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    themeToggle.style.height = "60px";
    themeToggle.style.lineHeight = "60px";

  }
}
function openPdf() {
  window.open('assets/Resume/BharathResume.pdf', '_blank');
}
var typingEffect = new Typed(".typedText", {
  strings: ["FullStack-developer", "DataBase-developer", "Freelancer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000
})
var typingEffect = new Typed(".nametext", {
  strings: ["Bharath S"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 3500
})
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})
sr.reveal('.featured-text-card', {})
sr.reveal('.featured-name', { delay: 100 })
sr.reveal('.featured-text-info', { delay: 200 })
sr.reveal('.featured-text-btn', { delay: 200 })
sr.reveal('.social_icons', { delay: 200 })
sr.reveal('.featured-image', { delay: 300 })
sr.reveal('.project-box', { interval: 200 })
sr.reveal('.top-header', {})
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})
srLeft.reveal('.about-info', { delay: 100 })
srLeft.reveal('.contact-info', { delay: 100 })
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})
srRight.reveal('.skills-box', { delay: 100 })
srRight.reveal('.form-control', { delay: 100 })
const sections = document.querySelectorAll('section[id]')
function scrollActive() {
  const scrollY = window.scrollY;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
    } else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}
function toggleMode() {
  const body = document.body;
  const footer = document.querySelector('top-footer');
  body.classList.toggle('dark-mode');
  footer.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
}
document.addEventListener('DOMContentLoaded', function () {
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  const body = document.body;
  const footer = document.querySelector('top-footer');
  if (isDarkMode) {
    body.classList.add('dark-mode');
    footer.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
    footer.classList.remove('dark-mode');
  }
});
function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById('themeIcon');
  const header = document.getElementById('header');
  const buttons = document.querySelectorAll('.btn');
  const container = document.querySelector('.container');
  const footer = document.querySelector('.top-footer');
  if (body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme');
    header.style.backgroundColor = 'white';
    buttons.forEach(button => {
      button.style.backgroundColor = '#efefef';
      button.style.color = 'black';
    });
    container.style.backgroundColor = 'var(--body-color)';
    footer.classList.remove('dark-theme');
    themeIcon.classList.remove('uil-moon');
    themeIcon.classList.add('uil-sun');
  } else {
    body.classList.add('dark-theme');
    header.style.backgroundColor = '#333';
    buttons.forEach(button => {
      button.style.backgroundColor = '#555'; 
      button.style.color = 'white';
    });
    container.style.backgroundColor = '#333'; 
    footer.classList.add('dark-theme');
    themeIcon.classList.remove('uil-sun');
    themeIcon.classList.add('uil-moon');
  }
}
window.addEventListener('scroll', scrollActive)
