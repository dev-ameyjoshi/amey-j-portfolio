const navSlide = () => {
     const burger = document.querySelector('.burger');
     const nav = document.querySelector('link-active');
     const navLPills =document.querySelectorAll(' .navigation .container li');

     burger.addEventListener('click',()=>{
          nav.classList.toggle('nav-active');

          navLinks.forEach((link,index) => {
               if(link.style.animation){
                    link.style.animation = ''
               }else{
                    link.style.animation = `navPillFade 0.5s ease forwards ${index / 7 +1.5}s`;
               }
               
          });
          // burger animation
          burger.classList.toggle('toggle');
     });
     
}

navSlide();