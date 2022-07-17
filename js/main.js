// Responsive carousel for width 0 t0 960
const responsive = {
  0 : {
    items: 1
  },
  320 : {
    items: 1
  },
  560 : {
    items: 2
  },
  960 : {
    items: 3
  },
}

$(document).ready(function(){

  $navbar = $('.navbar');
  $togglecollapse = $('.toggle-collapse');

  // Click event on toggle menu
  $togglecollapse.click(function(){
    $navbar.toggleClass('collapse')
  }) 

  // Owl-Carousel for Blog
  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 3000,
    dots: false, // to remove the default nav
    nav: true, // to add navigation
    navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
    responsive: responsive,
  });

  // Click to Scroll Up
  $('.scroll-up span').click(function(){
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  })

  // AOS Instance - to initialize the animation
  AOS.init();

});