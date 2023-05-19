let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};

      

document.getElementById('resume-link-1').addEventListener("click", () => {
  window.open("https://drive.google.com/file/d/1FBZAy8pC3V-T4tg1fsbfBvjM85NdXy2L/view?usp=sharing", "_blank");
});

document.getElementById('resume-link-2').addEventListener("click", () => {
  window.open("https://drive.google.com/file/d/1FBZAy8pC3V-T4tg1fsbfBvjM85NdXy2L/view?usp=sharing", "_blank");
});


//scrool reveal

ScrollReveal({ 
  reset: false,
  distance: '80px',
  duration:2000,
  delay:200
});

// ScrollReveal().reveal('.home-text, .heading', { origin: 'top' });
ScrollReveal().reveal('.skillCOnt, .project-card, .contact-form', { origin: 'bottom' });
// ScrollReveal().reveal('.skillCOnt, .project-card, .contact-form, .homeGif', { origin: 'bottom' });
ScrollReveal().reveal('.home-img, .calendar, .gitSt2', { origin: 'left' });
ScrollReveal().reveal('.about-text, .footer-social, .gitSt', { origin: 'right' });