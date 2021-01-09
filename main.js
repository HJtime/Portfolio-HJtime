'use strict'

// navbar 토글 버튼 활성화
const navbarMenu=document.querySelector('.navbar_menu');
const navbarToggle=document.querySelector('.navbar__toggle-btn');

navbarToggle.addEventListener('click',()=>{
    navbarMenu.classList.toggle('active');
    navbar.classList.toggle('active');
});

// Skill 그래프 애니메이션
const skillvalue=document.querySelector('.skill__value');
const about=document.querySelector('#about');
const aboutHeight=about.getBoundingClientRect().height;
const skillvalues=document.querySelectorAll('.skill__value');

window.addEventListener('scroll', ()=>{
    const scrolling=window.scrollY;

    if(scrolling > aboutHeight){
        skillvalues.forEach((skillvalues)=>{
            const width=skillvalues.dataset.value;
            skillvalues.style.width=width+'%';
        });
    }
});