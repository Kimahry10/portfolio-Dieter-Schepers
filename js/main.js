const hamburger = document.querySelectorAll('.header-image__hamburger');
const mobileNavigation = document.querySelector('.mobile-navigation');
const skillsGrid = document.querySelector('.skills-grid');
const projects = document.querySelector('.projects__list');

const test = document.querySelector('.test');





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


// loop through json file
let projectIds = []
fetch('projects.json')

  .then(response => response.json())
  .then(data => {
    data.map(project => {
      projects.innerHTML += `
      <li class='projects__list-item' data-id='${project.id}'>${project.title}</li>`

      projectIds.push(project.id)
      
      
      

      const projectsListItem = document.querySelectorAll('.projects__list-item');
      projectsListItem.forEach(item => {
        item.addEventListener('click', () => {
            test.innerHTML = `
          ${item.dataset.id}
          ${project.title}
          `

        });
      });


    });
  });
console.log(projectIds)