const projects = [{
  id: "e71edeb9-d51a-475e-b3af-202211c2fca4",
  title: "Arne Quinze",
  text: "Arne Quinze is een Gentse kunstenaar waarvan we zijn site moesten namaken. Hierbij heb ik onder andere self taught css grid geleerd.",
  img: "img/projects/arnequinze.png",
  link: "https://pgmgent-2021-atwork1.github.io/atwork-1_project_3-pgm-dieterschepers/index.html"
},
{
  id: "fb8d4e0f-8af8-4179-b183-cfa942b4130c",
  title: "Future Island",
  text: "Future Island was onze eindtaak van de eerste periode. Onder andere hebben we geleerd dat je met 1 click een hele div kan opvullen zoals de werking van deze 3 projecten buttons.",
  img: "img/projects/futureisland.png",
  link: "https://pgm-dieterschepers.github.io/future-island/"
},
{
  id: "609f82e9-f862-4973-8c9b-871efb4449c3",
  title: "HotRed (coming soon)",
  text: "HotRed (Coolblue, snap je hem?) is hét eindproject van ons eerste jaar. Hierbij is het de bedoeling dat we een webshop zo goed mogelijk namaken in groepjes van 2. Van sitemap, wireframe enzovoort tot het volledig werkende resultaat.",
  img: "img/projects/hotred.png",
  link: "#"
}
]

const hamburger = document.querySelectorAll('.header-image__hamburger');
const mobileNavigation = document.querySelector('.mobile-navigation');
const skillsGrid = document.querySelector('.skills-grid');
const projectsHTML = document.querySelector('.projects__list');

const projectInfoHTML = document.querySelector('.projects__project-info');





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


projects.forEach(project => {
  projectsHTML.innerHTML += `
  <li class='projects__list-item' data-id=${project.id}>${project.title}</li>
  `
})


const projectsListItem = document.querySelectorAll('.projects__list-item');


projectsListItem.forEach(project => {
  project.addEventListener('click', (ev) => {
    const projectData = projects.find((project) => project.id === ev.target.dataset.id);
    projectInfoHTML.innerHTML = `
      <p class='projects__list-item__text'>${projectData.text}</p>
      <a class='projects__list-item__view-project' href='${projectData.link}' target=_blank>view project</a>
      <img src='${projectData.img}' alt='${projectData.title}' loading='lazy'>
    `
  });
});