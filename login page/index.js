const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnpop = document.querySelector('.btnLogin-popup');
const iconclose = document.querySelector('.icon-close');
const clicksound = new Audio('sound.mp3');


registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
    clicksound.play();
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
    clicksound.play();
    
});

btnpop.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
   clicksound.play();
    
});
iconclose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
    clicksound.play();
   
});