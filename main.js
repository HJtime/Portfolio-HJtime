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

// 버튼 클릭 시 위치 이동
navbarMenu.addEventListener('click', (event)=>{
    const target=event.target;
    const link=target.dataset.link;

    if(link===null){
        return;
    }

    navbarMenu.classList.remove('active');

    ScrollIntoView(link);
});

// 버튼 클릭 시 페이지 이동
function ScrollIntoView(selector){
    const scrollTo=document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});
}