$(function () {

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
    $('.nav a:not(#fb)').click(function (e) {
        e.preventDefault();
        scroll($(this.hash).offset().top - 75);
        $(".hamburger").toggleClass("is-active");
        if ($(window).width() < 992)
            $(".header-nav").slideUp();
    });

    // smooth animation, click arrow-down
    $('.banner-arrow-down').on("click", function () {
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
        $('.menu-rest-module[data-index=' + $index + ']').fadeIn(500)
        $self.addClass('select');
    });

    // add shadow to menu on scroll down
    if ($(window).scrollTop() > 50)
        $(".page-header").addClass("ph-shadow");
    else
        $(".page-header").removeClass("ph-shadow");
});
