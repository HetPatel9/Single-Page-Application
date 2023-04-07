let container = document.getElementById('service');
let boxLength = container.offsetWidth;
const leftArrow = document.querySelector('.left-arrow');

leftArrow.addEventListener('click', () => {
    console.log(boxLength);
    container.scrollBy({
        left: boxLength * -0.5,
        behavior: "smooth"
    })
    // This condition makes scrolling circular 
    if (container.scrollLeft === 0) {
        container.scrollTo({
            left: container.scrollWidth,
            behavior: "smooth"
        })
    }
});
const rightArrow = document.querySelector('.right-arrow')
rightArrow.addEventListener('click', () => {
    container.scrollBy({
        left: boxLength * 0.5,
        behavior: "smooth"
    })

    // This condition makes scrolling circular
    if (container.scrollLeft > container.offsetWidth) {
        container.scrollTo({
            left: 0,
            behavior: "smooth"
        })
    }
});

// About me information of education and skill toggle 
let education = document.querySelector('.Education');
let skill = document.querySelector('.Skill');
let eduInfo = document.querySelector('.Education-info');
let skillInfo = document.querySelector('.Skill-info');
education.addEventListener('click', function () {
    eduInfo.classList.add('active-info-detail');
    skillInfo.classList.remove('active-info-detail');
    education.classList.add('active-info');
    skill.classList.remove('active-info');
});
skill.addEventListener('click', function () {
    skill.classList.add('active-info');
    education.classList.remove('active-info');
    eduInfo.classList.remove('active-info-detail');
    skillInfo.classList.add('active-info-detail');
});

// nav bar link click event and css change
let links = document.querySelectorAll('a');
links.forEach((link) => {
    link.addEventListener('click', function () {
        const linkName = document.querySelector('.activeLink');
        linkName.classList.remove('activeLink');
        link.classList.add('activeLink');
    })
});

// 
const target = document.querySelector('.welcome-text');
const text = 'Hii!! I am Het Patel. Welcome to my portfolio!';
let textArray = Array.from(text);

// 1ST WAY TO PRINT TEXT
for (let i = 0; i < text.length; i++) {
    setTimeout(function () {
        target.append(textArray[i]);
    }, i * 100);
}

// 2ND WAY TO ADD TEXT another approach 
// for(let i = 0; i<text.length;i++){
//     setTimeout(function(){
//         target.innerHTML = textArray.slice(0,i+1).join('');
//             console.log(target.innerHTML);
//     },i*100);
// }
