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

  //var fornamn = document.querySelector('#fname');
  

/*
// Denna funktion ska på knapptryck skapa ett objekt som görs om till String i JSON-format och lagrar i localstorage
$(document).ready(function() {
    $("#sub").on('click', function() {

      var förnamn = document.contactForm.firstname.value;
      var telefonnummer = document.contactForm.phonenumber.value;
      var epost = document.contactForm.emailadress.value;

      var mittObj = {

        name: förnamn,
        tele: telefonnummer,
        epost: epost
    };

    var mittObj_serialized = JSON.stringify(mittObj);


    localStorage.setItem("mittObj", mittObj_serialized);

    });
});
*/

// Denna funktion ska på knapptryck skapa ett objekt som görs om till String i JSON-format och lagrar i localstorage
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




//  Tanken med denna är att kolla om det finns nåt i Local Storage, och i så fall fylla i forumläret med de som finns i Local Storage
$(document).ready(function() {
  document.contactForm.emailadress.value = JSON.parse(localStorage.getItem('mittObj')).epost;
  document.contactForm.firstname.value = JSON.parse(localStorage.getItem('mittObj')).name;
  document.contactForm.phonenumber.value = JSON.parse(localStorage.getItem('mittObj')).tele;
  document.contactForm.subject.value = JSON.parse(localStorage.getItem('mittObj')).meddelande;
 
});
