$(function() {
  let slider = $('#galerySlider');

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

});
