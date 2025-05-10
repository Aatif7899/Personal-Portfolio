function showSidebar(){
  const sidebar =document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar(){
  const sidebar =document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}
document.addEventListener('click', (e) => {
  const sidebar = document.querySelector('.sidebar');
  const menuButton = document.querySelector('.menu-button');
  
  if (!sidebar.contains(e.target) && !menuButton.contains(e.target)) {
      hideSidebar();
  }
});

var typed = new Typed(".auto-type",{
  strings : ["Programmer", "Software Engineer", "Developer","Web Designer"],
  typeSpeed : 100,
  backspeed : 60,
  loop: true 
});

 
document.addEventListener('DOMContentLoaded', function() {
  const skillBars = document.querySelectorAll('.skill-progress');
  
  function animateSkillBars() {
      skillBars.forEach(bar => {
          const width = bar.getAttribute('data-width');
          if (isElementInViewport(bar)) {
              bar.style.width = width + '%';
          }
      });
  }
  
  function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }
  
  animateSkillBars();
  
  window.addEventListener('scroll', animateSkillBars);
});


const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 50,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});




function validateForm() {
  const form = document.forms["myForm"];
  if (!form["first_name"].value.trim()) {
      alert("Please enter your first name");
      return false;
  }
  return true;
}

