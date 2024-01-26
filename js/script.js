var menu=document.querySelector('#menu-bar');
var nav=document.querySelector('.nav-bar');
menu.onclick= ()=>{
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active');
}
window.onscroll=()=>{
    menu.classList.remove('fa-times');
    nav.classList.remove('active'); 
}
/*animation on testimonial section*/
let slide=document.querySelectorAll('.testimonial-box');
     let ind=0;
     function nex(){
        slide[ind].classList.remove('active');
        ind=(ind+1) % slide.length;
        slide[ind].classList.add('active');
     }
     function pre(){
        slide[ind].classList.remove('active');
        ind=(ind-1+slide.length) % slide.length;
        slide[ind].classList.add('active');
     }
