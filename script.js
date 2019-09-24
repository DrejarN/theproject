//Vår JS kod   
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

    $(".stripes").click(function() {
        $("ul").slideToggle();
        $("ul li").css("display", "block");
      });
    
    $(window).resize(function(){
        if($(window).width() < 1040){
            $("ul").removeAttr('style');
        }
    });
    

$(".stripes").click(function() {
    $("ul").slideToggle();
    $("ul li").css("display", "block");
  });

$(window).resize(function(){
    if($(window).width() < 1040){
        $("ul").removeAttr('style');
    }
});


document.getElementById('button').addEventListener('click', function(){
    document.querySelector('.darker').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.darker').style.display = 'none';

});

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