<?php 
$eposta = $_POST['eposta'];
$kayitSifresi = $_POST['kayitSifresi'];
$dogumgunu = $_POST['dogumgunu'];
$cinsiyet = $_POST['Cinsiyet'];
$isim = strstr($eposta, '@', true); // "@" karakterinden önceki kısmı alır
echo "Hoş geldin ".$isim."!<br>";

echo "İşleminiz Başarıyla gerçekleşmiştir.<br><br>";


    


    
    echo "E-MAİL: ".$eposta."<br>";
    echo "DOĞUMGÜNÜ: ".$dogumgunu."<br>";

    
    if($cinsiyet == 1)
        echo "CİNSİYET: Kadın <br>";
    else
        echo "CİNSİYET: Erkek <br>";

        echo "<p> <a href='AnaSayfa.html'>&lt;GERİ DÖN&gt;</a></p> ";
        
    // $isim = $_POST['eposta'];
    // $dizi = str_split($isim);

    // foreach($isim as $eleman ){
    //     if($eleman!="@"){
    //         $sonIsim=$sonIsim.$elaman;
    //     }
    // }
   



?>