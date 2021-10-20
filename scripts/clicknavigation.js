window.addEventListener("DOMContentLoaded", () => {

  // get elements
  const navElement = document.querySelector(".click-navigation a");
  const triggerBtn = document.querySelector(".navigation-trigger");
  const clickNav = document.querySelector(".click-navigation");
  const navIcon = document.querySelector(".nav-icon");
  
  // function to show/hide navbar on click
  function toggleButton() {
    triggerBtn.style.display = "inherit";
    if(clickNav.style.display === "flex") {
      clickNav.style.display = "none";
    } else {
      clickNav.style.display = "flex";
    }
  }

  // on click on button, show/hide navigation and run animation
  triggerBtn.addEventListener("click", () => {
    toggleButton();
    navIcon.classList.toggle("open");
  })

  // on click on nav link, close navigation
  navElement.addEventListener("click", () => {  
    toggleButton();
    navIcon.classList.toggle("open");
  })

  // scrolls down, hide the trigger button. scrolls up, show the it
  let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      let currentScrollPos = window.pageYOffset;
      if (currentScrollPos < (window.innerHeight / 2)) {
        triggerBtn.style.top = "0";
      } else if (prevScrollpos > currentScrollPos) {
        triggerBtn.style.top = "0";
      } else {
        triggerBtn.style.top = "-100px";
      }
      prevScrollpos = currentScrollPos;
    }  

})


