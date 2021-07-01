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

  $('select').addClass('select');

  $('.select').each(function() {
    const _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        duration = 150; // длительность анимации 

    _this.hide();
    _this.wrap('<div class="select"></div>');
    $('<div>', {
        class: 'new-select',
        text: _this.children('option:disabled').text()
    }).insertAfter(_this);

    const selectHead = _this.next('.new-select');
    $('<div>', {
        class: 'new-select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.new-select__list');
    
    for (let i = 1; i < selectOptionLength; i++) {
        $('<div>', {
            class: 'new-select__item',
            html: $('<span>', {
                text: selectOption.eq(i).text()
            })
        })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList);
    }

    const selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function() {
        if ( !$(this).hasClass('on') ) {
            $(this).addClass('on');
            selectList.slideDown(duration);

            selectItem.on('click', function() {
                let chooseItem = $(this).data('value');

                $('select').val(chooseItem).attr('selected', 'selected');
                selectHead.text( $(this).find('span').text() );

                selectList.slideUp(duration);
                selectHead.removeClass('on');
            });

        } else {
            $(this).removeClass('on');
            selectList.slideUp(duration);
        }
    });
  });

});