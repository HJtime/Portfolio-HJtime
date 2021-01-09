'use strict'

// navbar 토글 버튼 활성화
const navbarMenu=document.querySelector('.navbar_menu');
const navbarToggle=document.querySelector('.navbar__toggle-btn');

navbarToggle.addEventListener('click',()=>{
    navbarMenu.classList.toggle('active');
    navbar.classList.toggle('active');
});