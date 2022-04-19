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

