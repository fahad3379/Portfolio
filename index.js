const navToggle = document.querySelector('.nav-toggle');
const navToggle2 = document.querySelector('.nav-toggle2');
const navLinks = document.querySelectorAll('.nav_link')
const logo=document.querySelector('.logo');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});
navToggle2.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

// when logo is cliicked it will go to home page
logo.addEventListener('click',()=>{
    window.location.href="index.html";
} ) 
