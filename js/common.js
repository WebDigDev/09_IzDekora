$(function() {

// Плавное появление меню по клику

  $('.header__btn-box').click(function() {
      $('.header__menu').slideToggle();

  });

// Карусель

  $(".gallery__slider").owlCarousel({
     loop: true,
     items: 1,
    //  autoplay: true,
  });

// Слайдер для карнизов

  $(".gallery__box-eaves-slider").owlCarousel({
       loop: true,
       items: 1,
       autoplay: true,
       onInitialized: function() {
         $('.eaves-dot-item').eq($('.owl-dot.active').index()).addClass('active');
       },
       onChanged: function(){
        $('.eaves-dot-item').removeClass('active').eq($('.owl-dot.active').index()).addClass('active');
       }
    });
    $('.eaves-dot-item').click(function() {
        $('.owl-dot').eq($(this).index()).trigger('click');
    });

// Слайдер для "Наши сотрудники"

  $(".ourerase__slider").owlCarousel({
       loop: true,
       items: 5,
       autoplay: true,
       responsive:{

           0:{
               items:1
           },
           360:{
               items:1
           },
           500:{
               items:3
           },
           768:{
               items:4
           },
           850:{
               items:5
           }

       }
    });

// Появление прокрутки вверх при скролле

     $(function(f){
       var element = f('.link__up');
       f(window).scroll(function(){
         element['fade'+ (f(this).scrollTop() > 2500 ? 'In': 'Out')](200);
     });
 });

// Крестик в меню

    (function() {
      "use strict";
      var toggles = document.querySelectorAll(".header__btn-box");
        for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
        };
        function toggleHandler(toggle) {
        toggle.addEventListener( "click", function(e) {
          e.preventDefault();
          (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
      });
      }
    })();

//Scrool to id

    $("a[href*='#order']").mPageScroll2id();
    $("a[href*='#up']").mPageScroll2id();

//Выравнивание блоков по высоте

    $(".services__item-text").equalHeights();
    $(".services__item-ul").equalHeights();
    $(".working__inner-text").equalHeights();

// Скрытие текстовых блоков в галерее

  $(".gallery__link-down").click(function(evt){
      evt.preventDefault();
      if ($(".gallery__down ").is(':hidden')) {
        $(".gallery__down ").slideDown();
        $(this).text('скрыть');
      } else {
          $(".gallery__down ").slideUp();
          $(this).text('...показать полностью');
      }

  });

  $(".gallery__link-down2").click(function(evt){
      evt.preventDefault();
      if ($(".gallery__down2 ").is(':hidden')) {
        $(".gallery__down2 ").slideDown();
        $(this).text('скрыть');
      } else {
          $(".gallery__down2 ").slideUp();
          $(this).text('...показать полностью');
      }

  });

// Появление скрытых блоков при Resize

  $(window).resize(function(){
    var w = $(window).width();
    if (w > 480) {
      $('.gallery__down').removeAttr('style');
    }
  });

  $(window).resize(function(){
    var w = $(window).width();
    if (w > 480) {
      $('.gallery__down2').removeAttr('style');
    }
  });

// Слайдер для портфолио

  $('.portfolio__slider-box').flipster({
      itemContainer: '.portfolio__slider',
      itemSelector: '.portfolio__slider-item',
      style: 'carousel',
      spacing: -0.5,
      loop: true,
      nav: true,
      buttons: true,
      scrollwheel: false,
      touch: true
    });

// Галерея в Наши работы

    $('.gallery__photo-box').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				// return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});

// Галерея в портфолио

      $('.portfolio__slider_1 ').magnificPopup({
  		delegate: 'a',
  		type: 'image',
  		tLoading: 'Loading image #%curr%...',
  		mainClass: 'mfp-img-mobile',
  		gallery: {
  			enabled: true,
  			navigateByImgClick: false,
  			 preload: [0,1] // Will preload 0 - before current, and 1 after the current image
  		},
  		image: {
  			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
  			titleSrc: function(item) {
  				// return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
  			}
  		}
  	});

    $('.portfolio__slider_2 ').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: false,
       preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        // return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
      }
    }
  });

  $('.portfolio__slider_3 ').magnificPopup({
  delegate: 'a',
  type: 'image',
  tLoading: 'Loading image #%curr%...',
  mainClass: 'mfp-img-mobile',
  gallery: {
    enabled: true,
    navigateByImgClick: false,
     preload: [0,1] // Will preload 0 - before current, and 1 after the current image
  },
  image: {
    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    titleSrc: function(item) {
      // return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
    }
  }
});

// Форма popup

  $('.services__item-link').magnificPopup({
  		type: 'inline',
  		preloader: false,
  		focus: '#name',

  		// When elemened is focused, some mobile browsers in some cases zoom in
  		// It looks not nice, so we disable it:
  		callbacks: {
  			beforeOpen: function() {
  				if($(window).width() < 700) {
  					this.st.focus = false;
  				} else {
  					this.st.focus = '#name';
  				}
  			}
  		}
  	});

// Плавное появление блока по клику

  $('.articles__description').click(function() {
    var w = $(window).width();
    if (w < 481) {
      if ($(this).hasClass('open')) {
        $(this).removeClass('open').find('.articles__description-text ').slideUp().end().find('.fa').removeClass('fa-angle-up').addClass('fa-angle-down');
      }  else {
        $(this).addClass('open').find('.articles__description-text ').slideDown().end().find('.fa').removeClass('fa-angle-down').addClass('fa-angle-up');
        }
    }
  });

// Удаление display:none по resize

    $(window).resize(function(){
      var w = $(window).width();
      if (w > 480) {
        $('.articles__description-text').removeAttr('style');
      }
    });


});
