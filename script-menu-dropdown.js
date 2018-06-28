// JavaScript Document
window.sr = ScrollReveal();

sr.reveal('.bc1', { 
  origin: 'right', 
  duration: 1000 
});
sr.reveal('.bc2', { 
  origin: 'right', 
  duration: 1000 
});
sr.reveal('.bc3', { 
  origin: 'right', 
  duration: 1000 
});
sr.reveal('.bc4', { 
  origin: 'right', 
  duration: 1000 
});
sr.reveal('.bc5', { 
  origin: 'right', 
  duration: 1000 
});
sr.reveal('.bc6', { 
  origin: 'right', 
  duration: 1000 
});
sr.reveal('.about', { 
  origin: 'right', 
  duration: 1000 
});
sr.reveal('.intro-content', { 
  origin: 'right', 
  duration: 1000 
});
sr.reveal('.footer-div', { 
  origin: 'right', 
  duration: 1000 
});
sr.reveal('.copy-right', { 
  origin: 'right', 
  duration: 1000 
});
// Responsive Menu - Dropdown
const body = document.body;
const btn = document.querySelector('.menu');

btn.addEventListener('click',_ =>{

body.classList.toggle('show');


});


 $('a[href^="#"]').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000); 
        return false;
      }
    }
  });


 var Menu = {
  
  el: {
    ham: $('.menu'),
    menuTop: $('.menu-top'),
    menuMiddle: $('.menu-middle'),
    menuBottom: $('.menu-bottom')
  },
  
  init: function() {
    Menu.bindUIactions();
  },
  
  bindUIactions: function() {
    Menu.el.ham
        .on(
          'click',
        function(event) {
        Menu.activateMenu(event);
        event.preventDefault();
      }
    );
  },
  
  activateMenu: function() {
    Menu.el.menuTop.toggleClass('menu-top-click');
    Menu.el.menuMiddle.toggleClass('menu-middle-click');
    Menu.el.menuBottom.toggleClass('menu-bottom-click'); 
  }
};

Menu.init();




