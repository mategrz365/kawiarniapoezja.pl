$(function () {    
    var $window = $(window);
    
    // add shadow to menu on scroll down
    $window.scroll(function() {   
        $(".page-header").toggleClass("active-shadow", $window.scrollTop() > 60);
    });

    // menu show&hide when scrolling    
    var handleHeaderVisibility = function() {
        if ($window.width() < 1024) {
            var prevScrollPos = $window.scrollTop();
            $window.on('scroll', function () {
                var currentScrollPos = $window.scrollTop(),
                    headerHeight = $(".page-header").height();
                if (prevScrollPos > currentScrollPos) {
                    $('.page-header').css('top', '0');
                } else {
                    $('.page-header').css('top', `-${headerHeight}px`);
                }
                prevScrollPos = currentScrollPos;
            });
        }
    }

    handleHeaderVisibility();
    $(window).on('resize', handleHeaderVisibility);
    
    // menu show&hide
    $(".hamburger").click(function () {
        $(".header-nav").stop(true, true).fadeToggle();
        //$(".header-nav, .hamburger").toggleClass("is-active");
        $(".hamburger, header-nav").toggleClass("is-active");      
    });

    var scroll = function (offset) {
        $('html, body').animate({
            scrollTop: offset
        }, 500); //SWING
    }

    // smooth animation, click menu
    $('.header-nav a:not(#fb)').click(function (e) {
        e.preventDefault();
        scroll($(this.hash).offset().top - $(".page-header").height());
        $(".hamburger").toggleClass("is-active");
        if ($(window).width() < 992)
            $(".header-nav").slideUp(300);           
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
    
    //scrollReveal
    
    window.sr = ScrollReveal({ reset: true, duration: 1500});
    sr.reveal('.about');
    sr.reveal('.info-caffe');
    sr.reveal('.info-party');
    sr.reveal('.info-catering');
    sr.reveal('.parallax-img', { duration: 2000 });
    sr.reveal('.jeden', { duration: 1000 });
    sr.reveal('.dwa', { duration: 1200 });
    sr.reveal('.trzy', { duration: 1400 });
    sr.reveal('.cztery', { duration: 1600 });
    sr.reveal('.piec', { duration: 1800 });
});
