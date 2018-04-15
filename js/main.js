
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

<<<<<<< HEAD
    
    $(".menu-rest-select").click(function(){
        $index = $(this).data('index');
        $('.menu-rest-module').hide();/*.removeClass('active');*/
        $('.menu-rest-module[data-index='+$index+']').fadeIn(500);/*addClass('active'); */       
    });
    
    
});
    
    
    
 
      

    

    
   
      
        
      
    
        
   
  



=======
    $(".menu-rest-select").click(function() {
        var $self = $(this);
        var index = $self.data("index");
        scroll($self.position().top - 100);

        $(".menu-rest-module").hide();
        $(".menu-rest-module[data-index='" + index + "']").fadeIn();
    });
});
>>>>>>> d8f9ec77e22b2e84cd5b6ac225e2a10c134834d6
