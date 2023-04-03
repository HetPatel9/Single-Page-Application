let container = document.getElementById('service');
document.querySelector('.left-arrow').addEventListener('click',()=>{
    container.scrollBy(-100 , 0);
    // console.log('left arrow clicked');
});
document.querySelector('.right-arrow').addEventListener('click',()=>{
    console.log('right arrow clicked');
    container.scrollBy(500, 0);
});
