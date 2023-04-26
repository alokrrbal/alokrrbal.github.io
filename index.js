//menu icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');


menuIcon.onclick = ()=>{
  menuIcon.classList.toggle('bx-x');
  navBar.classList.toggle('active');
}







//scroll section active line

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');



window.onscroll = () => {

  sections.forEach(sec =>{
    let top =  window.scrollY;
    let offSet = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id  = sec.getAttribute('id');


    if(top >= offSet && top < offSet + height){
      navLinks.forEach(links => {
        links.classList.remove('active')
        document.querySelector('header nav a[href*=' + id +']').classList.add('active')
      })
    };
  });


  // sticky
  let header = document.querySelector(".header");

  header.classList.toggle("sticky", window.scrollY > 100);

  //remove menu icon navbar when click navbar link scroll

  menuIcon.classList.remove('bx-x');
  navBar.classList.remove('active');
};


//dark light mood

let darkModeIcon = document.querySelector('#darkMode-icon')
darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode')
}


//scroll reveal

ScrollReveal({ 
  reset: true,
  distance: '80px',
  duration:2000,
  delay:200
});


ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img , .services-container, .portfolio-box, contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3,.home-content p, .about-content p, about-content', { origin: 'right' });


//opening resum


document.getElementById('resume-button-1').addEventListener("click", () => {
  window.open("https://drive.google.com/file/d/1I7WJjZsAarVpxKsTsWO-SyuFsGZL6rcU/view?usp=share_link", "_blank");
});


document.getElementById('resume-button-2').addEventListener("click", () => {
  console.log("OPENinig.....");
  window.open("https://drive.google.com/file/d/1I7WJjZsAarVpxKsTsWO-SyuFsGZL6rcU/view?usp=share_link", "_blank");
});