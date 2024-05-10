function formkontrol() {

    var email = document.forms['girisFormu'][0].value; 
    var pass = document.forms['girisFormu'][1].value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");

    if (email == "" || email == null || pass == "" || pass == null) {
        alert("Lütfen boş alanları doldurunuz!");
        return false;
    }
    else {
        if (atpos =0 || dotpos + 2 >= email.length) {
            alert("Geçerli email adresi giriniz!");
            return false;
        }
    }
    return true;
}