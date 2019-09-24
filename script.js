//Vår JS kod    
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

function showSlides() {
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
    setTimeout(showSlides, 4500); // Change image every 2 seconds
  }
