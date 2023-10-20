$(document).ready(function () {
  $('.slider-banner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  });
  $('.slide-stories').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  });
  $('.slide-research').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    focusOnSelect: false,
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fas fa-chevron-right'></i></button>",
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-left'></i></button>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesPerRow: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  });
  $('.slide-document').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fas fa-chevron-right'></i></button>",
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-left'></i></button>",
  });
  $('.other-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fas fa-chevron-right'></i></button>",
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-left'></i></button>",
  });
  $('.slide-video').slick({
    vertical: true,
    infinite: true,
    verticalSwiping: true,
    slidesPerRow: 1,
    slidesToShow: 3,
    focusOnSelect: true,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesPerRow: 1,
          infinite: true,
          dots: true
        }
      },
    ]
  });
  $(".child-areas").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).find(".content-areas").slideUp();
    } else {
      $(".content-areas").slideUp();
      $(this).find(".content-areas").slideDown();
      $(".child-areas").removeClass("active");
      $(this).addClass("active");
    }
  });
  $('.nav-menu-mobie').click(function () {
    $('.header-wrapper').addClass("active-menu");
    $('.overlay').fadeIn();
  });
  $('.gallery').click(function () {
    $('.popup').fadeIn();
    $('.overlay').fadeIn();
  });
  $('.overlay').click(function () {
    $('.popup').fadeOut();
    $('.popup-apply').fadeOut();
    $('.header-wrapper').removeClass("active-menu");
    $('.overlay').fadeOut();
  });
  $('.close-popup').click(function () {
    $('.popup').fadeOut();
    $('.overlay').fadeOut();
  });
  $('.close').click(function () {
    $('.popup-apply').fadeOut();
    $('.header-wrapper').removeClass("active-menu");
    $('.overlay').fadeOut();
  });
  $('.btn-apply').click(function () {
    $('.popup-apply').fadeIn();
    $('.overlay').fadeIn();
  });

  var helpers = {
    addZeros: function (n) {
      return (n < 10) ? '0' + n : '' + n;
    }
  };

  function sliderInit() {
    var $slider = $('.slide-activities');
    $slider.each(function () {
      var $sliderParent = $(this).parent();
      $(this).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        customPaging: function (slider, index) {
          var num = index + 1;
          return '<span class="dot">' + num + '</span>';
        },
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        fade: true,
        speed: 900,
        infinite: true,
        touchThreshold: 100,
        draggable: true,
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fas fa-chevron-right'></i></button>",
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-left'></i></button>",
      });

      if ($(this).find('.child').length > 1) {
        $(this).siblings('.numbers-counter').show();
      }

      $(this).on('afterChange', function (event, slick, currentSlide) {
        $sliderParent.find('.numbers-counter .active').html(helpers.addZeros(currentSlide + 1));
      });

      var sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
      $sliderParent.find('.numbers-counter .total').html(helpers.addZeros(sliderItemsNum));

    });

  };

  sliderInit();
});
$(document).ready(function () {
  var elements = document.getElementsByClassName('js-gallery');
  for (let item of elements) {
    lightGallery(item, {
      share:false,
      plugins: [lgThumbnail, lgFullscreen],
    })
  }
});
$(document).ready(function($) {
  $('.tabs-content').hide();
  $('.tabs-content:first').show();
  $('.tabs-control li:first').addClass('active');
  $('.tabs-control li').click(function(event) {
    $('.tabs-control li').removeClass('active');
    $(this).addClass('active');
    $('.tabs-content').hide();

    var selectTab = $(this).find('a').attr("href");

    $(selectTab).fadeIn();
  });
});
$(document).ready(function (){
  $('.menu-mobie .sub-menu').click(function () {
      $(this).parent('li').children('.menu-dropdown').slideToggle();
  });
});
