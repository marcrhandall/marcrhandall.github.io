var underconst = true;
$(document).ready(function(){
    if(underconst){
       $(".underconst") $(window).height(); 
    } else{
        resizeHome();
    }
});

$(window).resize(function() {
    if(underconst){

    } else{
        resizeHome();
    }
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
    } else{
        navbar.css("background-color","#000");
        navbar.height("auto");
    }
 });

