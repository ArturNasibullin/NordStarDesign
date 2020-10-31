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
