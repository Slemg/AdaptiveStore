<<<<<<< HEAD
$('#main-content').slick({
  dots: true,
  responsive: [
    {
      breakpoint: 1440,
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
        slidesToScroll: 1
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
$('#main-content-pc').slick({
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  rows:3,
  autoplaySpeed: 4000,
});
  $('#review-content').slick({
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
  
=======

$('#main-content').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,

>>>>>>> da03fc0e0ebe13767eb6a5337290499462d412a0
    autoplaySpeed: 2000,
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
<<<<<<< HEAD
    ]
  });
  $('#review-content-mobile').slick({
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
  
    autoplaySpeed: 2000,
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
// alert('JS работает')
=======
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('#review-content').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    autoplaySpeed: 2000,
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
          slidesToScroll: 1,
          
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

>>>>>>> da03fc0e0ebe13767eb6a5337290499462d412a0





 

