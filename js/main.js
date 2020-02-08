$(function(){


    $('.slider-cont').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav'
      });
      
      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        asNavFor: '.slider-cont',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        variableWidth: true,
        touchMove: true,
        swipe: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 981,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 2,
              variableWidth: false,
            }
          },
          {
            breakpoint: 739,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              variableWidth: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              variableWidth: false,
            }
          },
          {
            breakpoint: 460,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              variableWidth: false,
            }
          },
        ]
        
      });
      
      
    $('.header__menu-btn').on('click', function(){
      $('.header__menu > ul').slideToggle();
  });


});