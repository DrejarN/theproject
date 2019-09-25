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