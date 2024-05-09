window.addEventListener('scroll', function() {
    var sabitBlok = document.querySelector('.renk');
    var container = document.querySelector('.container');
    var containerYukseklik = container.offsetHeight;
    var sabitBlokYukseklik = sabitBlok.offsetHeight;
    
    if (window.pageXOffset > containerYukseklik - sabitBlokYukseklik) {
        sabitBlok.style.position = 'absolute';
        sabitBlok.style.top = (containerYukseklik - sabitBlokYukseklik) + 'px';
    } else {
        sabitBlok.style.position = 'fixed';
        sabitBlok.style.top = '0';
    }
});
    function sifreKontrol(){
        var sifre1=document.getElementById("1sifre");
        var sifre2=document.getElementById("2sifre");
        if(sifre1!=sifre2){
        alert("Girilen şifreler uyuşmuyor.")
        }
        else {
            document.kayitFormu.submit;
        }
    }
