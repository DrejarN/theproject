// VALIDERING

//Validerar namn. Får innehålla små&stora bokstäver, mellanrum och vara mellan 3-30 karaktärer.
$(document).ready(function () {
  var $regexname = /^([a-zA-Z\s]{3,30})$/;
  $('#fname').keyup(function () {
    if (!$(this).val().match($regexname)) {
      $('.emsg1').removeClass('hidden1');
      $('.emsg1').show();
    }
    else {
      $('.emsg1').addClass('hidden1');
    }
  });
});


//Validerar Telefonnummer. Får innehålla siffror enbart.
$(document).ready(function () {
  var $regexnumber = /^[0-9]*$/g;
  $('#phoneNr').keyup(function () {
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
$(document).ready(function () {
  var $regexemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  $('#email').keyup(function () {
    if (!$(this).val().match($regexemail)) {
      $('.emsg3').removeClass('hidden3');
      $('.emsg3').show();
    }
    else {
      $('.emsg3').addClass('hidden3');
    }
  });
});


//Validering Meddelande. Säger ifrån om rutan är rom.
$(document).ready(function () {
  var $regexEmptyForm = /^$/;
  $('#subject').keyup(function () {
    if ($(this).val().match($regexEmptyForm)) {
      $('.emsg4').removeClass('hidden4');
      $('.emsg4').show();
    }
    else {
      $('.emsg4').addClass('hidden4');
    }
  });
});

//Validering på Submit - Ifall rutorna för namn eller text är tomma (eller om det finns error från realtidsvalidering uppe), så får man upp error.
$(function () {
  $('#sub').click(function () {
    var $regexname = /^([a-zA-Z\s]{3,30})$/;
    var $regexemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var $regexEmptyForm = /^$/;

    if (!$('#fname').val().match($regexname)) {
      window.alert("Something is wrong. Check your input!");
    } else if (!$('#email').val().match($regexemail)) {
      window.alert("Something is wrong. Check your input!");
    } else if ($('#subject').val().match($regexEmptyForm)) {
      window.alert("Something is wrong. Check your input!");
    } else {
      window.localStorage.removeItem('mittObj');
      document.contactForm.emailadress.value = "";
      document.contactForm.firstname.value = "";
      document.contactForm.phonenumber.value = "";
      document.contactForm.subject.value = "";
    }
  });
});

//Validering för NAMN på onload om LS innehåller ett objekt
$(document).ready(function () {
  var $regexname = /^([a-zA-Z\s]{3,30})$/;
  if (window.localStorage.getItem('mittObj') !== null) {
    if (!$('#fname').val().match($regexname)) {
      $('.emsg1').removeClass('hidden1');
      $('.emsg1').show();
    }
  } else {
    $('.emsg1').addClass('hidden1');
  }
});

//Validering för EMAIL på onload om LS innehåller ett objekt
$(document).ready(function () {
  var $regexemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (window.localStorage.getItem('mittObj') !== null) {
    if (!$('#email').val().match($regexemail)) {
      $('.emsg3').removeClass('hidden3');
      $('.emsg3').show();
    }
  } else {
    $('.emsg3').addClass('hidden3');
  }
});

//Validering för TELEFON på onload om LS innehåller ett objekt
$(document).ready(function () {
  var $regexnumber = /^[0-9]*$/g;
  if (window.localStorage.getItem('mittObj') !== null) {
    if (!$('#phoneNr').val().match($regexnumber)) {
      $('.emsg2').removeClass('hidden2');
      $('.emsg2').show();
    }
  } else {
    $('.emsg2').addClass('hidden2');
  }
});

//Validering för SUBJECT på onload om LS innehåller ett objekt
$(document).ready(function () {
  var $regexEmptyForm = /^$/;
  if (window.localStorage.getItem('mittObj') !== null) {
    if ($('#subject').val().match($regexEmptyForm)) {
      $('.emsg4').removeClass('hidden4');
      $('.emsg4').show();
    }
  } else {
    $('.emsg4').addClass('hidden4');
  }
});
