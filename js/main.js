
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
    
    $(".menu-rest-select").click(function(){
        var $index = $(this).data('index');
        var $self = $(this);
        
        scroll($self.position().top - 50);
        
        $('.menu-rest-module').hide();/*.removeClass('active');*/
        $('.menu-rest-module[data-index='+$index+']').fadeIn(500);/*addClass('active'); */       
    });
    
    
});
    


