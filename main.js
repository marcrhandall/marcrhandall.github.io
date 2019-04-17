$(document).ready(function(){
    resizeHome();
});

$(window).resize(function() {
    resizeHome();
 });

 function resizeHome(){
    $(".navbar").height(80);
    windowSize = $(window).height();
    homeContentSize = $(".home-content").height();
    home = $(".home-container");
    if(homeContentSize<windowSize){
        home.height(windowSize);
    } else{
        home.css('margin-top',50);
        home.css('margin-bottom',50);
    }
 }

 $(document).scroll(function() { 
    navbar = $(".navbar");
    if($(window).scrollTop() == 0) {
         navbar.css("background-color","rgba(0,0,0,0.0)");
         navbar.height(80);
         navbar.hide();
    } else{
        navbar.show();
        navbar.css("background-color","#000");
        navbar.height("auto");
    }
 });

