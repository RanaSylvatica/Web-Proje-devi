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
        var sifre1=document.getElementById("kayitSifresi").value;
        var sifre2=document.getElementById("kayitSifresiTekrar").value;
        if(sifre1!=sifre2){
        alert("Girilen şifreler uyuşmuyor.")
        return false;

        }
        else {
            document.kayitFormu.submit;
        }
        return true;
    }
    
    
     
    function control(){

        var email=document.forms['kayitFormu'][0].value;   
        var alinanSifre=document.forms['kayitFormu'][1].value;
        var dgmgn=document.forms['kayitFormu'][2].value;
        var atpos=email.indexOf('@');
        var dotpos=email.lastIndexOf('.');
        var email_length=email.length;

        
       
        if(email=="")
        {
            alert("Email boş!");
            return false;
        }
        else
        {
            if(atpos < 1  || dotpos + 2 >= email_length)
            {
                alert("Geçersiz email!");
                return false;
            }
        }
        if( dgmgn == "" || email == "" || alinanSifre == ""){
            alert("boşlukları doldurunuz!");
            return false;
        }
        return true;
        
            
    }

