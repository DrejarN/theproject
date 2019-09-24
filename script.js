<<<<<<< HEAD
//Vår JS kod   

/*
$(".stripes").click(function() {
    $("ul").slideToggle();
    $("ul li").css("display", "block");
  });

$(window).resize(function(){
    if($(window).width() < 1040){
        $("ul").removeAttr('style');
    }
});

=======
//Vår JS kod
>>>>>>> 833b1a873c3685f8d61dd317a1729843905fe793

document.getElementByClassName('.show').addEventListener('click', function(){
    document.querySelector('.darker').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.darker').style.display = 'none';

});
<<<<<<< HEAD
*/
=======


$(document).ready(function(){
    $(".stripes").click(function() {
        $("ul").slideToggle();
        $("ul li").css("display", "block");
      });
    
    $(window).resize(function(){
        if($(window).width() < 1040){
            $("ul").removeAttr('style');
        }
    });
    
});

>>>>>>> 833b1a873c3685f8d61dd317a1729843905fe793
var myTimeOut;

function showSlides() {
    console.log(slideIndex);
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    myTimeOut = setTimeout(showSlides, 4000); // Byter bild var 4:e sek
  }

  /*
  window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        alert("Yeah!");
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
    }
}
*/