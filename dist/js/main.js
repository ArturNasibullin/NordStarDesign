$(function() {
  let header = $('#header');
  let mainPage = $('#mainPage');
  let mainPageH = mainPage.innerHeight();
  let scrollPos = $(window).scrollTop();
  let burgerBtn = $('#burgerToggle');
  let menu = $('#headerMenu');

  $(window).on('scroll load resize', function() {
     let mainPageH = mainPage.innerHeight();
    scrollPos = $(this).scrollTop();

    if (scrollPos > mainPageH) {
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
    }
  });

  // Smooth scroll
  $('[data-scroll]').on('click', function(event){
    event.preventDefault();

    let elementID = $(this).data('scroll');
    let elementOffset = $(elementID).offset().top;
    

    $('html, body').animate({
      scrollTop: elementOffset - 80
    }, 1000);


    menu.removeClass('show');
    
  });
  
  // Burger
  burgerBtn.on('click', function() {

    menu.toggleClass('show');

  });


});




// slider
$(function() {
  let slider = $('#galerySlider'),
      secondSlider = $('#processCorusele');

      slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true,
        prevArrow: $('.arrow__prev'),
        nextArrow: $('.arrow__next'),

      });

      secondSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
      });
});
