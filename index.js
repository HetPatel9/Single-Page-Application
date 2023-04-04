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
let education= document.querySelector('.Education');
let skill= document.querySelector('.Skill');
let eduInfo = document.querySelector('.Education-info');
let skillInfo = document.querySelector('.Skill-info');
education.addEventListener('click',function (){
    skillInfo.style.display='none';
    eduInfo.style.display='block';
});
skill.addEventListener('click',function (){
    eduInfo.style.display='none';
    skillInfo.style.display='block';
});