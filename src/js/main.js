$(function () {    
    var $window = $(window);
    var $headerHeight = $(".page-header").height();
    
    var scroll = function (offset) {
        $('html, body').animate({
            scrollTop: offset
        }, 500); 
    }
    
        // add shadow to menu on scroll down
        $window.scroll(function() {   
            $(".page-header").toggleClass("active-shadow", $window.scrollTop() > $headerHeight);
        });
    
        //show restaurant menu on mobile
    
        $window.scroll(function() { 
            if ($window.width() < 768){
              var bottomPos = $(".menu-rest").offset().top + $(".menu-rest").outerHeight(true)-$(window).height();        
                if($window.scrollTop() > $(".menu-rest").offset().top - $headerHeight
                   &&($window.scrollTop() < bottomPos)) {
                     $('.menu-select-mobile').css("display","block");
                }else{
                     $('.menu-select-mobile').css("display","none");
                }  
        }
        }); 
    
     $('.close-btn').on('click', function(){
        $('.close-btn').removeClass('is-visible');
        $('.menu-select').removeClass('act');
     }); 
    
        //click restaurant menu on mobile    
        $('.menu-select-mobile').on('click', function(){
            $('.menu-select-mobile').css("display","none");
            $('.menu-select').addClass('act')
            $('.close-btn').addClass('is-visible');
            
        });

        // menu show&hide when scrolling    
        var handleHeaderVisibility = function() {
            if ($window.width() < 1024) {
                var prevScrollPos = $window.scrollTop();
                $window.on('scroll', function () {
                    var currentScrollPos = $window.scrollTop();
                    if (prevScrollPos > currentScrollPos) {
                        $('.page-header').css('top', '0');
                    } else {
                        $('.page-header').css('top', `-${$headerHeight}px`);
                    }
                    prevScrollPos = currentScrollPos;
                });
            }
        }

        handleHeaderVisibility();
        $(window).on('resize', handleHeaderVisibility);
    
        // menu show&hide
        $(".hamburger").click(function () {                
            $(".hamburger").toggleClass("is-changed");      
            $(".header-nav").toggleClass("is-active");      
        });  

        // smooth animation, click menu  SPOWOLNIC POCZETEK!
        $('.header-nav a:not(#fb)').click(function (e) {
            e.preventDefault();
            scroll($(this.hash).offset().top - $headerHeight);
            $(".hamburger").toggleClass("is-changed");
            if ($(window).width() < 992)
                $(".header-nav").toggleClass("is-active");           
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
        $(window).scroll(function () {
            let $arrow = $(".arrow-up");
            if ($(window).scrollTop() + $(window).height() >= $(document).height())
                $arrow.addClass("animation");
            else
                $arrow.removeClass("animation");
        });
    
        $(".btn").click(function () {
            let $index = $(this).data('index');
            let $self = $(this);            
                if($window.width() < 768){  
                     $('.close-btn').removeClass('is-visible');
                     scroll($('.menu-rest').position().top-$headerHeight);
                     selectCard();
                     $('.menu-select').removeClass('act');
                }else{
                    
                     scroll($self.position().top - $headerHeight);
                     selectCard();
                     $self.addClass('select');
                }

             function selectCard(){
                $(".btn").removeClass('select');
                $('.menu-rest-module').hide();
                $('.menu-rest-module[data-index=' + $index + ']').fadeIn(500);
            }
        });          
      
        //scrollReveal
        window.sr = ScrollReveal({ reset: true, duration: 1500});
        sr.reveal('.about, .info-caffe, .info-party, .info-catering'); 
        sr.reveal('.img-arr:first-of-type, .img-arr:last-of-type',{scale:0.9, duration:2000});
        sr.reveal('.img-arr');
        });

