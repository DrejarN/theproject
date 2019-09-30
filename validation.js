// VALIDERING

//Validerar namn. Får innehålla små&stora bokstäver, mellanrum och vara mellan 3-30 karaktärer.
$(document).ready(function() {
    var $regexname = /^([a-zA-Z\s]{3,30})$/;  
    $('#fname').keyup(function() {
      if (!$(this).val().match($regexname)) {
          console.log("Ingen match");
           $('.emsg1').removeClass('hidden1');
           $('.emsg1').show();
       }
     else {
          $('.emsg1').addClass('hidden1');
         }
  });
});


//Validerar Telefonnummer. Får innehålla siffror enbart.
$(document).ready(function() {
    var $regexnumber= /^[0-9]*$/g;
    $('#phoneNr').keyup(function() {
      if (!$(this).val().match($regexnumber)) {
           $('.emsg2').removeClass('hidden2');
           $('.emsg2').show();
       }
     else {
          $('.emsg2').addClass('hidden2');
         }
  });
});


//Validerar email enligt hur en email ska se ut: xxx@xxx.xxx
$(document).ready(function() {
    var $regexemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    $('#email').keyup(function() {
      if (!$(this).val().match($regexemail)) {
          console.log("de matchar ej");
           $('.emsg3').removeClass('hidden3');
           $('.emsg3').show();
       }
     else {
          $('.emsg3').addClass('hidden3');
         }
  });
});


//Validering Meddelande, text-ruta
