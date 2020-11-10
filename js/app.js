$(document).ready(function() {
    //   "use strict";





    // search
    // var $search_container = $('.search-container');
    // // var $search_icon = $('.header-search');
    // var $search_close = $('#close');
    // $search_close.on('click', function() {
    //     console.log(124);
    // });


    // meanmenu
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: '991',
    });

    //   preloadder
    $(window).on('load', function() {
        //$("#loading").delay(2000).fadeOut(500);
        $("#loading").fadeOut(500);
    })

    // nice select
    $(document).ready(function() {
        $('select').niceSelect();
    });

    // scroll to top
    //Top to back
    $(".top-btm").click(function() {
        $('html,body').animate({
            "scrollTop": "0"
        }, 1000)
    });

    //fade in fade out
    $(window).scroll(function() {
        var scrollValue = $(this).scrollTop();

        if (scrollValue >= 500) {
            $(".top-btm").fadeIn();
        } else {
            $(".top-btm").fadeOut();
        }
    });
    // hero slider
    $('.active-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="fas fa-arrow-right"></i></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="fas fa-arrow-left"></i></button>'
    });
    // team slider
    $('.team-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 300,
        // prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
        // nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // testimonial slider
    $('.testi-slide').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        // prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
        // nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // brand slider
    $('.brand-slide').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        // prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
        // nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });




    /* magnificPopup video view */
    $('.pop').magnificPopup({
        type: 'iframe',

    });

    // counter up
    // $('.counter').counterUp();




});