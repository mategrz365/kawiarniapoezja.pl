$(document).ready(function() {
    var scroll = function(offset) {
        $('html,body').animate({scrollTop: offset}, 500);
    }

    $(".hamburger").click(function() {
        $(".page-nav").stop(true, true).fadeToggle();
        $(".page-nav, .hamburger, .page-header").toggleClass("is-active");
    });

    $('.menu-nav a').click(function(event){
        event.preventDefault();
        scroll($(this.hash).offset().top);
    });

    $(".arrow").click(function() {
        scroll(0);
    });

    $(".content > section").Lazy();
})
