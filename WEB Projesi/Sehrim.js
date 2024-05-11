var mainImg = document.querySelector("img");
var images=['images/agebzemeydan.jpg','images/bdarica.jpg','images/center.jpg','images/cayirova.png'];
var num=0;  
const auto=true;
const gecisSuresi=3000;
let slideInterval
 
function ileri(){
    num++
    if(num>=images.length)
    {
        num=0;
        mainImg.src=images[num];
    }
    else{
        mainImg.src=images[num];
    }
}
function geri(){
    num--
    if(num<0){
        num=images.length-1;
        mainImg.src=images[num];
    }
    else{
        mainImg.src=images[num];
    }
}
if(auto){
    slideInterval=setInterval(ileri,gecisSuresi);
}


