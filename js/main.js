const projects = [{
  id: "e71edeb9-d51a-475e-b3af-202211c2fca4",
  title: "Arne Quinze",
  text: "Arne Quinze is a Belgian artist whose site we had to copy. In this project I taught myself css grid.",
  img: "img/projects/arnequinze.PNG",
  link: "https://pgmgent-2021-atwork1.github.io/atwork-1_project_3-pgm-dieterschepers/index.html"
},
{
  id: "fb8d4e0f-8af8-4179-b183-cfa942b4130c",
  title: "Future Island",
  text: "Future Island was our endproject during the first period. We learned that you could fill up a whole div with content with just 1 click. Kinda how these 3 buttons work.",
  img: "img/projects/futureisland.PNG",
  link: "https://pgm-dieterschepers.github.io/future-island/"
},
{
  id: "609f82e9-f862-4973-8c9b-871efb4449c3",
  title: "HotRed (coming soon)",
  text: "HotRed (Coolblue, get it?) is THE endproject of our first year of school. The intention is that we imitate a webshop in groups of 2 as well as possible. From sitemap, wireframe and so on to the full working result.",
  img: "img/projects/hotred.PNG",
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

// shows project list items
projects.forEach(project => {
  projectsHTML.innerHTML += `
  <li class='projects__list-item' data-id=${project.id}>${project.title}</li>
  `
})

// shows collapsing info from projects
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


// fetch skills.json

