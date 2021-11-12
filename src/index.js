$('#main-content').slick({
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        
      }
    },
    ]

});
$('#main-content-pc').slick({
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  rows:3,
  playSpeed: 4000,
});
  $('#review-content').slick({
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
  
    playSpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('#review-content-mobile').slick({
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
  
    playSpeed: 3000,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });

  const animItems = document.querySelectorAll("._anim-items"); // Элементы которые нужно анимировать
  if(animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    /* Что происходит: Для каждого элемента который имеет класс '_anim-items' при достижении 1/4 его
    высоты, либо 1/4 высоты окна браузера(если высота объекта выше высоты окна браузера) ему 
    добавляется класс '_active'. Если мы недокрутили до елемента, либо перекрутили то у него класс
    '_active' убирается. */
    function animOnScroll() {
      for(let index = 0; index < animItems.length; index++){ 
        const animItem = animItems[index]; // Получаем каждый объект отдельно
        const animItemHeight = animItem.offsetHeight; // Получаем высоту объекта
        const animItemOffset = offset(animItem).top; // Позиция объекта относительно верха
        const animStart = 4; // Коэффициент резулирующий момент старта анимации
  
        // Настройка момента старта анимации
        let animItemPoint = window.innerHeight - animItemHeight / animStart;
  
        // Для случая когда анимированный объект выше по высоте чем окно браузера
        if(animItemHeight > window.innerHeight){
          animItemPoint = window.innerHeight - window.innerHeight / 4;
        }
  
        // Добавляем элементам класс при определенных условиях
        if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
          animItem.classList.add('_active');
        }else{ // Убрать класс нужно для повторной анимации объекта
          /* Наличие у объекта класса '_anim-no-hide' говорит о том что не нужно объект  
          повторно анимировать если опять на него проскролили */
          if(!animItem.classList.contains('_anim-no-hide')){
            animItem.classList.remove('_active');
          }
        }
      }
    }
    function offset(el) {// Корректно и кроссбраузерно выщитывает позиция объекта относительно верха
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
  
    setTimeout(function() {
      animOnScroll();
    }, 300);
  }




