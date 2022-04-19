$(document).ready(function(){
    $('.carousel__inner').slick({
        dots: false,
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/icons/prevp.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/icons/next.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  dots: true,
                  arrows: false
                }
            }
        ]
            
      });
  });