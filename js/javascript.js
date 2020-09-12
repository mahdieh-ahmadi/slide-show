document.querySelector('.banner button').addEventListener('click' , 
() =>{
     document.querySelector('.banner').style.display = 'none';
     document.querySelector('.main').style.cssText='opacity: 1; visibility: visible;';
     document.querySelector('.main-slideshow').style.animation='slideShow 15s infinite';
     
});