$(window).on('load', function() {

    // Loading
    $(".box-loading").delay(0).fadeOut('slow', function () {
        $(this).remove().fadeOut();
    });

    ///////////////////////////////////////////
    
    // Set Same Height Of Two Section
    var height = $(".main-section .details").innerHeight();
    $(".main-section .name").css({
        minHeight: height
    });

    $(window).resize(function () {
        var height1 = $(".main-section .details").innerHeight();
        $(".main-section .name").css({
            minHeight: height1
        });
    });
    
    ///////////////////////////////////////////

    // Navbar on Scroll Animation
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 60) {
            $('.nav-bar').addClass('active-nav');
        } else {
            $('.nav-bar').removeClass('active-nav');
        }
    });

    var Top = 0;
    $(window).on('scroll',function(){
      var scrollTop = $(this).scrollTop();
      if (scrollTop > Top)    {
        $('.nav-bar').addClass('animate');
      } else {
        $('.nav-bar').removeClass('animate');
      }
      Top = scrollTop;
    });

    ///////////////////////////////////////////

    // ScrollTop Button
    $('.scroll').click(function(){
        $('body, html').animate({
            scrollTop: 0
        }, 1200);
    });
  
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $('.scroll').css({
                opacity: 1,
                bottom: '3%'
            });
        } else {
            $('.scroll').css({
                opacity: 0,
                bottom: '90%'
            });
        }
    });
    //home and about-us carousel
    let slides = $('.item').length ;
    if (slides <= 3){
        $('.web-owl').owlCarousel({
        loop: true,
        dots: false,
        autoplay: true,
        lazyLoad: true,
        smartSpeed: 700,
        responsive: {
            0: {
            items: 1
            },
            600: {
            items: 2
            },
            1000: {
            items: slides
            }
        }
        });
    }
    else {
        $('.web-owl').owlCarousel({
            loop: true,
            dots: false,
            autoplay: true,
            lazyLoad: true,
            smartSpeed: 700,
            responsive: {
              0: {
                items: 1
              },
              600: {
                items: 2
              },
              1000: {
                items: 3
              }
            }
          });
    }


    let memberSlides  = $('.member-item').length;
    if (memberSlides <= 3) {    
        $('.member-owl').owlCarousel({
        loop: true,
        dots: false,
        autoplay: true,
        lazyLoad: true,
        smartSpeed: 700,
        responsive: {
            0: {
            items: 1
            },
            600: {
            items: 2
            },
            1000: {
            items: memberSlides
            }
        }
        });
    }
    else {
        $('.member-owl').owlCarousel({
            loop: true,
            dots: false,
            autoplay: true,
            lazyLoad: true,
            smartSpeed: 700,
            responsive: {
                0: {
                items: 1
                },
                600: {
                items: 2
                },
                1000: {
                items: 3
                }
            }
            });
    }

    let sponserSlides  = $('.sponser-item').length;
    if (sponserSlides <= 3){
        $('.sponser-owl').owlCarousel({
        loop: true,
        dots: false,
        autoplay: true,
        lazyLoad: true,
        smartSpeed: 700,
        responsive: {
            0: {
            items: 1
            },
            600: {
            items: 2
            },
            1000: {
            items: sponserSlides
            }
        }
        });
    }
    else {
        $('.sponser-owl').owlCarousel({
            loop: true,
            dots: false,
            autoplay: true,
            lazyLoad: true,
            smartSpeed: 700,
            responsive: {
                0: {
                items: 1
                },
                600: {
                items: 2
                },
                1000: {
                items: 3
                }
            }
            });
    }

    /////////////////////////////////////////////
    
    // Init Owl Carousel (Slider)
    $('.owl-carousel').owlCarousel({
        loop:true,
        items:1,
        dots: true,
        autoplay: true,
        smartSpeed: 700
    });

    // Init AOS (Animation)
    AOS.init();

});