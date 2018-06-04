$(function () {    
    var $window = $(window);

    // add shadow to menu on scroll down

    $window.scroll(function() {   
        if ($window.scrollTop() > 60) {
            $(".page-header").addClass("active-shadow");
        } else {
            $(".page-header").removeClass("active-shadow");
        }
    });

    // menu show&hide when scrolling
    
    if ($window.width() < 1024) {
        var prevScrollPos = $window.scrollTop();
        $window.on('scroll', function () {
            var currentScrollPos = $window.scrollTop();
            if (prevScrollPos > currentScrollPos) {
                $('.page-header').css('top', '0');
            } else {
                $('.page-header').css('top', '-65px');
            }
            prevScrollPos = currentScrollPos;
        });
    }

    // menu show&hide
    $(".hamburger").click(function () {
        $(".header-nav").stop(true, true).fadeToggle();
        $(".header-nav, .hamburger").toggleClass("is-active");
    });

    var scroll = function (offset) {
        $('html, body').animate({
            scrollTop: offset
        }, 500);
    }

    // smooth animation, click menu
    $('.header-nav a:not(#fb)').click(function (e) {
        e.preventDefault();
        scroll($(this.hash).offset().top - 75);
        $(".hamburger").toggleClass("is-active");
        if ($(window).width() < 992)
            $(".header-nav").slideUp(500);
    });

    // smooth animation, click arrow-down
    $('.banner-arrow-down').click(function () {
        scroll($('.about').offset().top - 75);
    });

    // smooth animation, click arrow-up
    $(".icon-up-big").click(function () {
        scroll(0);
    });

    // show arrow-up on scroll down
    var $arrow = $(".arrow-up");
    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() >= $(document).height())
            $arrow.addClass("animation");
        else
            $arrow.removeClass("animation");
    });

    // menu-restaurant
    $(".btn").click(function () {
        var $index = $(this).data('index');
        var $self = $(this);
        scroll($self.position().top - 90);
        $(".btn").removeClass('select');
        $('.menu-rest-module').hide();
        $('.menu-rest-module[data-index=' + $index + ']').fadeIn(500);
        $self.addClass('select');
    });

});
