// VALIDERING

//Namn
$(document).ready(function() {
    var $regexname = /^([a-zA-Z\s]{3,30})$/;  
    //var $regexname=/^([a-zA-Z]{3,30})$/; // utan spaces
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


//Telefon
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


//Email
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


//Meddelande, text-ruta



/*
function validera() {
    var förnamn = document.contactForm.firstname.value;
    var telefonnummer = document.contactForm.phonenumber.value;
    var epost = document.contactForm.emailadress.value;
    var isValid = true;

    if (förnamn == null || förnamn == "") {
        alert("Name can't be blank")
        isValid = false;
    }

    if (telefonnummer<10) {
        alert("Phone number needs to be at least 10 numbers long")
        isValid = false;
    }

        if (epost < 8) {
            alert("E-mail must be atleast 8 characters long")
            isValid = false;
        }


        return isValid;
    }
    */