$(document).ready(function () {
  $(".lending_mob").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "90px",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  $(".owl-news").slick({
    infinite: true,
    slidesToShow: 3,
    dots: true,
    slidesToScroll: 3,
    margin: "10px",
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "180px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

 

  if ($(".brands_slider").length) {
    var brandsSlider = $(".brands_slider");

    brandsSlider.owlCarousel({
      loop: true,
      autoplay: false,
      nav: false,
      dots: false,
      autoWidth: false,
      items: 3,
      stagePadding: 60,
      margin: 0,
      responsive:{
        0:{
            items:1
        },
        600:{
            stagePadding: 210,
            items:1
        },
        1000:{
          stagePadding: 0,
            items:3
        }
      },
    });

    if ($(".brands_prev").length) {
      var prev = $(".brands_prev");
      prev.on("click", function () {
        brandsSlider.trigger("prev.owl.carousel");
      });
    }

    if ($(".brands_next").length) {
      var next = $(".brands_next");
      next.on("click", function () {
        brandsSlider.trigger("next.owl.carousel");
      });
    }
  }
});
