jQuery(document).ready(function ($) {
  ///----top-menu
  var $window = $(window),
    $target = $('.header__container'),
    $topPosition = $target.offset().top;
  $window.on('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > $topPosition && $(document).width() < 1023) {
      $target.addClass('header__fixed');
      return;
    } else {
      $target.removeClass('header__fixed');
    }
    return;
  });

  ////----sub menu-show

  $('.menu-item-has-children__btn').on('click', function () {
    if ($(document).width() < 1023) {
      $(this).siblings('.sub-menu').slideToggle('fast');
    } else {
    }
  });

  //details open-close

  $('.categories > details').each(function () {
    if ($(document).width() > 1023) {
      $(this).attr('open', true);
    } else {
      $(this).attr('open', false);
    }
  });

  /////////CHEKING///////////////////////

  $window.on('resize', function () {
    if ($(document).width() > 1023) {
      $target.removeClass('header__fixed');
    } else {
      $target.addClass('header__fixed');
    }
  });

  //---sliders
  $('.testimonials__body').slick({
    infinite: true,
    speed: 600,
    arrows: false,
  });
});
