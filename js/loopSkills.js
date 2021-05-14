const allProjectsHTML = document.querySelector('.projects-body__projects');

fetch('../projects/projects.json')
  .then(res => res.json())
  .then(data => {
    data.map(project => {
      allProjectsHTML.innerHTML += `
      <div class='projects-body__projects__project'>
        <h3>${project.title}</h3>
        <img src='../${project.img}'>
        <p>${project.text}</p>
      </div>
      `
    })
  })