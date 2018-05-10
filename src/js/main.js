
$(function() {
    
   
   
    var scroll = function(offset) {
        $('html,body').animate({scrollTop: offset}, 500);
    }
    
    

    $(".hamburger").click(function() {
        $(".header-nav").stop(true, true).fadeToggle();
        $(".header-nav, .hamburger, .page-header").toggleClass("is-active");
    });

    $('.menu-nav a').click(function(event){
        event.preventDefault();
        scroll($(this.hash).offset().top);
    });

    
    $(".btn").click(function(){
        var $index = $(this).data('index');
        var $self = $(this);
        
        scroll($self.position().top - 90);
        $(".btn").removeClass('select');
        $('.menu-rest-module').hide();
        
        $('.menu-rest-module[data-index='+$index+']').fadeIn(500)
        $self.addClass('select');
       
    });
    
       
    
    var $arrow = $(".arrow");
    
    $(window).scroll(function() {
        if($(window).scrollTop() + $(window).height() >= $(document).height())             
            $arrow.addClass("animation");
        else
            $arrow.removeClass("animation");
        
        if($(window).scrollTop()>50)
            $(".page-header").addClass("ph-shadow");
            else
            $(".page-header").removeClass("ph-shadow");    
                
        
         //test
         if($(window).scrollTop()>100)
            $(".test-effect").addClass("test-effect-animation");
    });
        
   
    
  
         
  
        
            
    $(".icon-up-big").click(function() {
       $("html,body").animate({scrollTop:0}, 500);
    });
    
    
    
    
        
   });
    


