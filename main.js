$(document).ready(function(){
    resizeHome();
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
          var scrollTo = $(hash).offset().top - 50;
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: scrollTo
          }, 800, null);
        } // End if
      });
    
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
    } 
 }

 $(document).scroll(function() { 
    navbar = $(".navbar");
    if($(window).scrollTop() == 0) {
         navbar.css("background-color","rgba(0,0,0,0.0)");
         navbar.height(50);
         navbar.hide();
    } else{
        navbar.height(50);
        navbar.show();
        navbar.css("background-color","#fff");
        navbar.height("auto");
    }
 });

