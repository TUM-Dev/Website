(function ($) {
    'use strict';

    // :: 1.0 Owl Carousel Active Code
    if ($.fn.owlCarousel) {
        $(".welcome_slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            nav: true,
            navText: ["<i class='pe-7s-angle-left'</i>", "<i class='pe-7s-angle-right'</i>"]
        });
        $(".app_screenshots_slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 800,
            margin: 30,
            center: true,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 3
                },
                992: {
                    items: 5
                }
            }
        });
    }

    // :: 3.0 Footer Reveal Active Code
    $('footer').footerReveal({
        shadow: true,
        shadowOpacity: 0.3,
        zIndex: -101
    });

    // :: 4.0 ScrollUp Active Code
    $('#scrollUp').on('click', function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
    $("a[href^='#']").on('click', function(e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top }, "slow");
    });

    // :: 6.0 onePageNav Active Code
    if ($.fn.onePageNav) {
        $('#nav').onePageNav({
            currentClass: 'active',
            scrollSpeed: 2000,
            easing: 'easeOutQuad'
        });
    }

    // Show fixed bar & scrollTop only after scrolling down a bit
    var $window = $(window);
    $window.on('scroll', function () {
        if ($window.scrollTop() > 48) {
            $('.header_area').addClass('sticky slideInDown');
            $('#scrollUp').fadeIn('fast');
        } else {
            $('.header_area').removeClass('sticky slideInDown');
            $('#scrollUp').fadeOut('fast');
        }
    });
})(jQuery);