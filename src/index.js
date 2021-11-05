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
alert('JS работает')





 

