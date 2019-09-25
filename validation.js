function validera() {
    var förnamn = document.contactForm.firstname.value;
    /*
    var phonenumber = document.getElementById("phoneNr").value;
    var email = document.getElementById("email").value;
    */
    var isValid = true;

    if (förnamn == null || förnamn == "") {
        alert("Name can't be blank")
        isValid = false;
    }

    /*
    if (!/^\+?\d{0,13}$/i.test(phonenumber)) {
        alert("Please input a correct phone number")
        isValid = false;
    }

    if (!/^[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}$/i.test(email)) {
        alert("Please input a correct emailadress")
        isValid = false;
    }
    */

    return isValid;
}