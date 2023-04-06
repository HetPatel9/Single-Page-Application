// scroll efect in service card
let container = document.getElementById('service');
let boxLength = container.offsetWidth;
const leftArrow = document.querySelector('.left-arrow');
leftArrow.addEventListener('click', () => {
    container.scrollBy({
        top: 0,
        left: boxLength * -0.5,
        behavior: "smooth"
    })
});
// console.log(boxLength);
const rightArrow = document.querySelector('.right-arrow')
rightArrow.addEventListener('click', () => {
    container.scrollBy({
        top: 0,
        left: boxLength * 0.5,
        behavior: "smooth"
    })
});

// About me information of education and skill toggle 
let education = document.querySelector('.Education');
let skill = document.querySelector('.Skill');
let eduInfo = document.querySelector('.Education-info');
let skillInfo = document.querySelector('.Skill-info');
education.addEventListener('click', function () {
    skillInfo.style.display = 'none';
    eduInfo.style.display = 'block';
  
});
skill.addEventListener('click', function () {
    eduInfo.style.display = 'none';
    skillInfo.style.display = 'block';
});

// nav bar link click event and css change
let links = document.querySelectorAll('a');

links.forEach((link) => {
    link.addEventListener('click', function () {
        const linkName = document.querySelector('.activeLink');
        if (linkName == null) {
            link.classList.add('activeLink');
        }
        else {
            linkName.classList.remove('activeLink');
            link.classList.add('activeLink');
        }
    })
});