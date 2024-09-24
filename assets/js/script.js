$(document).ready(function(){
    // Mobile Menu 
   $('#nav-icon').on('click', function(e){
      e.preventDefault();
      $(this).toggleClass('open');
      $('.mainMenu').slideToggle();
  });


//   dropdrown 
    $('.mainMenu ul li.menu-item-has-children > a').on('hover', function(e){
        e.preventDefault();
        $(this).siblings('ul').slideToggle();
    });
    
    $('.mainMenu ul li.menu-item-has-children > a').on('click', function(e){
        e.preventDefault();
        $(this).siblings('ul').slideToggle();
    });

  
    
});
