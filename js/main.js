const hamburger = document.querySelectorAll('.header-image__hamburger');
const mobileNavigation = document.querySelector('.mobile-navigation');
const skillsGrid = document.querySelector('.skills-grid');
const projectsHTML = document.querySelector('.projects__list');

const projectInfoHTML = document.querySelector('.projects__project-info');

const scrollTopButton = document.querySelector('.arrow');





// toggle hamburger
hamburger.forEach(ham => {
  ham.addEventListener('click', () => {
    (mobileNavigation.classList.contains('mobile-navigation--show')) ? mobileNavigation.classList.remove('mobile-navigation--show') : mobileNavigation.classList.add('mobile-navigation--show');
  });
});


// shows all skills
for (let i = 1; i < 12; i++) {
  skillsGrid.innerHTML += `<img src='img/skills/skill${i}.svg' >`;
};


// loops through projects.json
fetch('projects/projects.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(project => {
      // makes 3 list items
      projectsHTML.innerHTML += `
        <li class='projects__list-item' data-id=${project.id}>${project.title}</li>
      `
      const projectsListItem = document.querySelectorAll('.projects__list-item');
      // loops through the 3 list items
      projectsListItem.forEach(listItem => {
        // each item clicked fills up different info in the div
        listItem.addEventListener('click', () => {
          const projectData = data.find(project => project.id === listItem.dataset.id);
          projectInfoHTML.innerHTML = `
            <p class='projects__list-item__text'>${projectData.text}</p>
            <a class='projects__list-item__view-project' href='${projectData.link}' target=_blank>view project</a>
            <img src='${projectData.img}' alt='${projectData.title}' loading='lazy'>
          `
        });
      });
    });
  });


// scroll to top button fade in after scroll
var myScrollFunc = function () {
  var y = window.scrollY;
  if (y >= 200) {
    scrollTopButton.style.display = 'block'
  } else {
    scrollTopButton.style.display = 'none'

  }
};
window.addEventListener("scroll", myScrollFunc);

// scroll to top button click animation
function scrollToTop() {
  // Scroll to top logic
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollTopButton.addEventListener("click", scrollToTop)