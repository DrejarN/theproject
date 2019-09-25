//Vår JS kod   

$(function(){
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


$(function(){
    document.getElementById('moreinfo').addEventListener('click', function(){
        document.querySelector('.darker').style.display = 'flex';
    });

    document.getElementById('moreinfo').addEventListener('click', function(){
        $(".hidden").fadeIn("slow");
    });
    
    document.querySelector('.close').addEventListener('click', function(){
        document.querySelector('.darker').style.display = 'none';
    
    });

});

$(function(){
    document.getElementById('moreinfo2').addEventListener('click', function(){
        document.querySelector('.darker2').style.display = 'flex';
    });
    
    document.querySelector('.close').addEventListener('click', function(){
        document.querySelector('.darker2').style.display = 'none';
    
    });
});
$(function(){
    document.getElementById('moreinfo3').addEventListener('click', function(){
        document.querySelector('.darker3').style.display = 'flex';
    });
    
    document.querySelector('.close').addEventListener('click', function(){
        document.querySelector('.darker3').style.display = 'none';
    
    });
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

  function sparaData() {
    var mittObj = {
      fornamn = enVariabel.getItem();,
      efternamn = enVariabel.getItem();,
      land = enVariabel.getItem();,
      amne = enVariabel.getItem();
    };

    var mittObj_serialized = JSON.stringify(mittObj);

    localStorage.setItem("mittObj", mittObj_serialized);
    console.log(mittObj_serialized);

  }

  function laddaData() {

    var mittObj_deserialized = JSON.parse(localStorage.getItem(mittObj));

    fornamn = 
  }