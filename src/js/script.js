(function($) {
  $(function() {
    
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    
    function toggleSlide(item) {
      $(item).each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
  
        });
      });
    }
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

  });
  })(jQuery);
    
    
    var slider = tns({
    container: '.carousel__inner',
    controls: false,
    nav: true,
    navPosition: 'bottom',
    responsive: {
        /* 100: {
            gutter: 30
          }, доделать слайдшоу батоны для айфонов */
        1200: {
            items: 1,
            slideBy: 'page',
            autoplay: false,
            nav: false,
            controls: false,
            autoWidth: false,
            controlsText: [
                '<img src="../img/icons/prev.svg">',
                '<img src="../img/icons/next.svg">'
            ]
        }
      },
    
    
  });




  document.querySelector('.prev').onclick = function () {
    slider.goTo('prev');
  };
  document.querySelector('.next').onclick = function () {
    slider.goTo('next');
  };

  //modal
  //consultation
  $('[data-model=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn('slow')
  });
  //close
  $('.modal__close').on('click', function () {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow')
  });
  //allwordsInOrder
  $('.button_mini').each(function(i) {
    $(this).on('click', function () {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text())
      $('.overlay, #order').fadeIn('slow')
    });

  });
  


