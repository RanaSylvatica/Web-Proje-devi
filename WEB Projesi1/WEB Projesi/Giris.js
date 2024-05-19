function reset() {
    document.getElementById("girisFormu").reset();
}

function girisKontrol(form) {

    var email = form._eposta.value;
    var pass = form._Sifre.value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");

    if (email == "" || email == null || pass == "" || pass == null) {
        alert("Lütfen boş alanları doldurunuz!");
        return false;
    }
    else {
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
            alert("Geçerli email adresi girin");
            return false;
        }
    }
    return true;
}
