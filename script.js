//Vår JS kod   

//Menybaren ändras beroende på skärmstorlek
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

//Sköter animation för skills-staplarna på personliga sidorna
$(function(){
    document.getElementById('moreinfo').addEventListener('click', function(){
        document.querySelector('.darker').style.display = 'flex';
        $(document).ready(function(){
            $('.html').animate({width: '100%'},2000);
            $('.css').animate({width: '90%'},3000);
            $('.js').animate({width: '40%'},4000);
          });
    });

    document.querySelector('.close').addEventListener('click', function(){
        document.querySelector('.darker').style.display = 'none';
    
    });

});

//Sköter animation för skills-staplarna på personliga sidorna
$(function(){
    document.getElementById('moreinfo2').addEventListener('click', function(){
        document.querySelector('.darker2').style.display = 'flex';
        $(document).ready(function(){
            $('.html').animate({width: '80%'},2000);
            $('.css').animate({width: '90%'},3000);
            $('.js').animate({width: '50%'},4000);
          });
    });
    
    document.querySelector('.close2').addEventListener('click', function(){
        document.querySelector('.darker2').style.display = 'none';
    
    });
});

//Sköter animation för skills-staplarna på personliga sidorna
$(function(){
    document.getElementById('moreinfo3').addEventListener('click', function(){
        document.querySelector('.darker3').style.display = 'flex';
        $(document).ready(function(){
            $('.html').animate({width: '50%'},2000);
            $('.css').animate({width: '30%'},3000);
            $('.js').animate({width: '100%'},4000);
          });
    });
    
    document.querySelector('.close3').addEventListener('click', function(){
        document.querySelector('.darker3').style.display = 'none';
    
    });
});

//Funktionen som kör bildspelet

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
  
//Tar input från contact-fält, skapar ett objekt och lagrar i webläsarens Local Storage i JSON-format
$(document).ready(function() {
  $('.storeData').keyup(function() {

    var förnamn = document.contactForm.firstname.value;
    var telefonnummer = document.contactForm.phonenumber.value;
    var epost = document.contactForm.emailadress.value;
    var meddelande = document.contactForm.subject.value;

    var mittObj = {

      name: förnamn,
      tele: telefonnummer,
      epost: epost,
      meddelande: meddelande
  };

  var mittObj_serialized = JSON.stringify(mittObj);
  localStorage.setItem("mittObj", mittObj_serialized);

  });
});

//Fyller i fält på contact-sidan från Local Storage på sidladdning.
$(document).ready(function() {
  document.contactForm.emailadress.value = JSON.parse(localStorage.getItem('mittObj')).epost;
  document.contactForm.firstname.value = JSON.parse(localStorage.getItem('mittObj')).name;
  document.contactForm.phonenumber.value = JSON.parse(localStorage.getItem('mittObj')).tele;
  document.contactForm.subject.value = JSON.parse(localStorage.getItem('mittObj')).meddelande;
 
});