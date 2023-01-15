$(document).ready(function(){
    const homeStudies = $('.studies-list-mobile').owlCarousel({
      loop: false,
      autoplay: false,
      slideTransition: 'linear',
      nav: false,
      dots: false,
      items: 1,
      stagePadding: 50,
      responsive:{
        0:{
          stagePadding: 16
        },
        426:{
          stagePadding: 50
        },
      }
    });

    $('.studies-list-controls .right-arrow').click(function() {
      homeStudies.trigger('prev.owl.carousel');
    })
    $('.studies-list-controls .left-arrow').click(function() {
      homeStudies.trigger('next.owl.carousel');
    })
});