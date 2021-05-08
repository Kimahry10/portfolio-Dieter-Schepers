const hamburger = document.querySelectorAll('.header-image__hamburger');
const mobileNavigation = document.querySelector('.mobile-navigation');
const skillsGrid = document.querySelector('.skills-grid');





// toggle hamburger
hamburger.forEach(ham => {
  ham.addEventListener('click', () => {
    (mobileNavigation.classList.contains('mobile-navigation--show')) ? mobileNavigation.classList.remove('mobile-navigation--show') : mobileNavigation.classList.add('mobile-navigation--show');
  })
})


// shows all skills
for (let i = 1; i < 12; i++) {
  skillsGrid.innerHTML += `<img src='img/skills/skill${i}.svg' >`;
  
}