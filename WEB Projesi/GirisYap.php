<?php 

    $email = "b231210092@sakarya.edu.tr";
    $pass = "b231210092";

    $_email = $_POST["_eposta"];
    $_pass = $_POST["_Sifre"];
    $isim = strstr($_email, '@', true); // "@" karakterinden önceki kısmı alır


    if(($_email == $email) && ($_pass == $pass))
    {
        echo "Hoş geldin ".$isim."!<br>";
    }
    else
    {
        header("Location:GirisYap.html");        
        exit();
    }
    echo "<p> <a href='AnaSayfa.html'>&lt;GERİ DÖN&gt;</a></p> ";

?>