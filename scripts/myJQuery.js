$(document).ready(function(){
    /*call functions once 
    page is done loading*/
    activeLink();
    smoothScroll();
    scrollTop();
});

//navbar smooth scrolling
var smoothScroll = function(){
    $("#home").on("click", function(){
       $("html, body").animate({
           scrollTop: $(".my_header").offset().top
       }, 1000);
    });
    $("#menu").on("click", function(){
       $("html, body").animate({
           scrollTop: $(".my_menu").offset().top
       }, 1000);
    });
    $("#drinks").on("click", function(){
       $("html, body").animate({
           scrollTop: $(".my_drinks").offset().top
       }, 1000);
    });
    $("#contact").on("click", function(){
       $("html, body").animate({
           scrollTop: $(".my_res").offset().top
       }, 1000);
    });
};

/*smooth scrolling back to top
 using the fixed anchor element*/ 
var scrollTop = function(){
    var offset = $(".navbar").height();
    var duration = 500;
    $("#scroll_top").hide();  

    $(window).scroll(function(){
        if($(this).scrollTop() > offset){
            $("#scroll_top").fadeIn(duration);
        }
        else{
           $("#scroll_top").fadeOut(duration);
        }  
    });
    
    $("#scroll_top").on("click", function(){
       $("html, body").animate({
          scrollTop: 0
       }, duration);
    }); 
};

//active link
var activeLink = function(){
    $(".nav li").click(function(){
        $("li").removeClass("default");
        $(this).addClass("default", 1000);
    });
};






