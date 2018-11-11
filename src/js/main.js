  const $window = $(window);
  const $headerHeight = $(".page-header").height();  
  const $mobileWidth = 768;
  let ind = 1;

  function scrollPage(offset) {
        $('html, body').animate({
            scrollTop: offset
        }, 500); 
  };
    
  function addMenuShadow (){
         $(".page-header").toggleClass("active-shadow", $window.scrollTop() > $headerHeight);
  };
    
  function showBtnMenuRest_mobile() {
            if ($window.width() < $mobileWidth){
              var bottomPos = $(".menu-rest").offset().top + $(".menu-rest").outerHeight(true)-$(window).height();        
                if($window.scrollTop() > $(".menu-rest").offset().top - $headerHeight
                   &&($window.scrollTop() < bottomPos)) {
                     $('.menu-select-mobile').css("display","block");
                }else{
                     $('.menu-select-mobile').css("display","none");
                }  
            }
    }; 
    
  function showArrowUp() {
        let $arrow = $(".arrow-up");
        if ($(window).scrollTop() + $(window).height() >= $(document).height()-100)
            $arrow.addClass("animation");
        else
            $arrow.removeClass("animation");
  };

  function changeMenuCard(){
            let $index = $(this).data('index');
            let $self = $(this);            
                    if($window.width() < $mobileWidth){  
                         $('.close-btn').removeClass('is-visible');
                         scrollPage($('.menu-rest').position().top-$headerHeight);
                         selectCard();
                         $('.menu-select').removeClass('act');
                    }else{                    
                         scrollPage($self.position().top - $headerHeight);
                         selectCard();
                         $self.addClass('select');
                    }
                 function selectCard(){
                    $(".btn").removeClass('select');
                    $('.menu-rest-module').hide();
                    $('.menu-rest-module[data-index=' + $index + ']').fadeIn(500);                 
                 }
    };
 
    function hideCloseBtn(){
        $('.close-btn').removeClass('is-visible');
        $('.menu-select').removeClass('act');
    };
 
    function showMenuRest_mobile(){
        $('.menu-select-mobile').css("display","none");
        $('.menu-select').addClass('act');
        $('.close-btn').addClass('is-visible');  
    };


    function handleHeaderVisibility(){
        if ($window.width() < 1024) {
            let prevScrollPos = $window.scrollTop();
            $window.on('scroll', function () {
                let currentScrollPos = $window.scrollTop();
                if (prevScrollPos > currentScrollPos) {
                    $('.page-header').css('top', '0');
                } else {
                    $('.page-header').css('top', `-${$headerHeight}px`);
                }
                prevScrollPos = currentScrollPos;
            });
        }
    }

    function toggleHamburger(){
        $(".hamburger").toggleClass("is-changed");      
        $(".header-nav").toggleClass("is-active"); 
    };

    function scrollToHash(e){
        e.preventDefault();
        scrollPage($(this.hash).offset().top - $headerHeight);
        $(".hamburger").toggleClass("is-changed");
        if ($(window).width() < 992)
        $(".header-nav").toggleClass("is-active"); 
    }

    function scrollDown(){
        scrollPage($('.about').offset().top - 75);
    }

    function scrollTop(){
         scrollPage(0);
    }
 

    function slider(){    
       $('.slider').animate({opacity: 0}, 'slow', function() {
        $(this)
            .css({'background-image': `url(./img/img_${ind}.jpg)`})
            .animate({opacity: 1});
           $('.dot').removeClass('checked');
           $(`.dot[data-ind=${ind}]`).addClass('checked')
    });
        ind++;
        if(ind>3){ind = 1;};
    }

        $(function () { 
            $window.on('scroll', showBtnMenuRest_mobile);           
            $window.on('scroll', addMenuShadow);           
            $window.on('scroll', showArrowUp);  
            $('.header-nav a:not(#fb)').click(scrollToHash);
            $('.banner-arrow-down').click(scrollDown);
            $(".icon-up-big").click(scrollTop); 
            $(".btn").click(changeMenuCard); 
            $('.close-btn').click(hideCloseBtn); 
            $(".hamburger").click(toggleHamburger);  
            handleHeaderVisibility();
            $(window).on('resize', handleHeaderVisibility);
            $('.menu-select-mobile').click(showMenuRest_mobile);
            if($window.width() < $mobileWidth){setInterval(slider, 4000);}
            window.sr = ScrollReveal({ reset: true, duration: 1500});
            sr.reveal('.about, .info-cafe, .info-party, .info-catering'); 
            sr.reveal('.img-arr:first-of-type, .img-arr:last-of-type',{scale:0.9, duration:2000});
            sr.reveal('.img-arr');
        });