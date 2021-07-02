jQuery(document).ready(function ($) {
  
  $('.call-menu').on('click', function() {
    if ($('.menu-nav').hasClass('menu-nav-active')) {
      $('body').css('overflow', 'auto');
      $('html').css('overflow', 'auto');
    } else {
      $('body').css('overflow', 'hidden');
        $('html').css('overflow', 'hidden');
    }
    $('.menu-services .close').slideToggle(200);
    $('.menu-services .open').slideToggle(200);
    $('.menu-nav').toggleClass('menu-nav-active');
  });

  $('.call-message').on('click', function() {
    $('.overlay-popup').fadeIn(200);
    $('.popup-consult').fadeIn(200);
  });
  $('.call-franchise').on('click', function() {
    $('.overlay-popup').fadeIn(200);
    $('.popup-franchise').fadeIn(200);
  });
  $('.overlay-popup').on('click', function() {
    $('.overlay-popup').fadeOut(200);
    $('.popup').fadeOut(200);
    $('#thx').fadeOut(200);
  });
  $('.close').on('click', function() {
    $('.overlay-popup').fadeOut(200);
    $('.popup').fadeOut(200);
    $('#thx').fadeOut(200);
  });

  $('.menu-nav-container').on('click', function(e) {
    var target = e.target;

    if ($(target).hasClass('overlay')) {
        if ($('.menu-nav').is(':visible')) {
          $('body').css('overflow', 'auto');
          $('html').css('overflow', 'auto');
        }
        $('.menu-nav').toggleClass('menu-nav-active');
        $('.menu-services .close').slideToggle(200);
        $('.menu-services .open').slideToggle(200);
    } 
  });

  $('.feed-wrap').slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    rtl: false,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<div class="slider-arrow slick-next"></div>',
    nextArrow: '<div class="slider-arrow slick-prev"></div>'
  });

  $('.page-deals-wrap').slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    rtl: false,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<div class="slider-arrow slick-next"></div>',
    nextArrow: '<div class="slider-arrow slick-prev"></div>'
  });
  $('.services-about .services-wrap').slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    rtl: false,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<div class="slider-arrow slick-next"></div>',
    nextArrow: '<div class="slider-arrow slick-prev"></div>'
  });
  $('.franchise-services .services-wrap').slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    rtl: false,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<div class="slider-arrow slick-next"></div>',
    nextArrow: '<div class="slider-arrow slick-prev"></div>'
  });
  
  $('.page-team-wrap-item-content').slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    rtl: false,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<div class="slider-arrow slick-next"></div>',
    nextArrow: '<div class="slider-arrow slick-prev"></div>'
  });
  $('.single-services-how-wrap').slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    rtl: false,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<div class="slider-arrow slick-next"></div>',
    nextArrow: '<div class="slider-arrow slick-prev"></div>'
  });
  $('.single-services-who-wrap').slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    rtl: false,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<div class="slider-arrow slick-next"></div>',
    nextArrow: '<div class="slider-arrow slick-prev"></div>'
  });
  $('.single-services-cost-wrap').slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    rtl: false,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<div class="slider-arrow slick-next"></div>',
    nextArrow: '<div class="slider-arrow slick-prev"></div>'
  });

  $('.answer-wrap-item').on('click', function(e) {
    if ($(this).hasClass('answer-wrap-item-active')) {
        $(this).children('.answer-wrap-item-text').slideUp(200);
        $(this).removeClass('answer-wrap-item-active');
    } else {
        $('.answer-wrap-item').children('.answer-wrap-item-text').slideUp(200);
        $('.answer-wrap-item').removeClass('answer-wrap-item-active');
        $(this).children('.answer-wrap-item-text').slideDown(200);
        $(this).addClass('answer-wrap-item-active');
    }
  });
  
  $('.page-team-wrap-item-title').on('click', function() {
    if ($(this).hasClass('page-team-wrap-item-title-active')) {
      $('.page-team-wrap-item-title').removeClass('page-team-wrap-item-title-active');
      $('.page-team-wrap-item-content').removeClass('page-team-wrap-item-content-active');
    } else {
      $('.page-team-wrap-item-title').removeClass('page-team-wrap-item-title-active');
      $('.page-team-wrap-item-content').removeClass('page-team-wrap-item-content-active');
      $(this).toggleClass('page-team-wrap-item-title-active');
      $(this).next().toggleClass('page-team-wrap-item-content-active');
    }
    
  });

  $('.video-wrap').on('click', function() {
    $(this).addClass('video-wrap-active')
    $(this).children('img').fadeOut(200);
    $(this).children('iframe').fadeIn(200);
    const videoFrame = document.querySelector('.video-wrap iframe');

    videoFrame.src = videoFrame.dataset.src;
  });

  $('.footer-nav h3').on('click', function() {
    $('.footer-nav-menu').slideToggle(200);
  });

  
  $('.feed-moar').on('click', function() {
    if ($(this).prev().hasClass('page-feed-wrap-item-content-active')) {
      $(this).prev().removeClass('page-feed-wrap-item-content-active');
      $(this).text('Читать полностью');
    } else {
      $(this).prev().addClass('page-feed-wrap-item-content-active');
      $(this).text('Свернуть');
    }
    
  });

  $('.contacts-another-wrap-item-title').on('click', function() {

    if ($(this).hasClass('contacts-another-wrap-item-title-active')) {
      $(this).removeClass('contacts-another-wrap-item-title-active');
      $('.contacts-another-wrap-item-links').slideUp(200);

    } else {
      $('.contacts-another-wrap-item-title').removeClass('contacts-another-wrap-item-title-active');
      $('.contacts-another-wrap-item-links').slideUp(200);


      $(this).addClass('contacts-another-wrap-item-title-active');
      $(this).next().slideDown(200);
    }
    
  });

  const feeds = document.querySelectorAll('.page-feed-wrap-item');

  if (feeds.length <= 3) {
    const feedMoar = document.querySelector('.page-feed-moar');

    if (feedMoar) {
      feedMoar.remove();
    }
  }

  const blogItem = document.querySelectorAll('.blog-wrap-item');

  if (blogItem.length <= 3) {
    const blogMoar = document.querySelector('.blog-wrap-moar');

    if (blogMoar) {
      blogMoar.remove();
    }
  }

  $('.page-feed-moar').on('click', function() {
    $('.page-feed-wrap-item').slideDown(200);
    $(this).hide();
  });
  $('.blog-wrap-moar').on('click', function() {
    $('.blog-wrap-item').slideDown(200);
    $(this).hide();
  });

  if (navigator.share) { // Проверяем поддержку функционала браузера
    button = jQuery('.share'); // Класс кнопки "поделиться"
    button.show().on('click', function () {
      navigator.share({
        title: jQuery(this).data('title'),
        text: jQuery(this).data('text'),
        url: jQuery(this).data('url'),
      });
      return false;
    });
  } 

  $('.ask textarea').on('focus', function() {
    $('.ask input').slideDown(200);
    $(this).css('height', '150px')
  });

});