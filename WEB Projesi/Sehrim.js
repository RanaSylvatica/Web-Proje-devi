const ileri=document.getElementById('next');
const geri =document.getElementById('#prev');

const slider=document.querySelector('.image');
const img=document.querySelector('.slider');
const auto=0;
const gecisSuresi=3000;
let slideInterval

// const imgLength =document.querySelector('.slider')
// const sliderMax=(imgLength-1)*img.offsetWidth

function ilerle(){
    if(slider.scrollLeft<3000){
       slider.scrollLeft+=1000;  
    }else{
        slider.scrollLeft=0;
    }
}
function geriyedon(){
    if(slider.scrollLeft>0){
       slider.scrollLeft-=1000;  
    }else{
        slider.scrollLeft=3000;
    }
}
if(auto){
        slideInterval=setInterval(ileri,gecisSuresi);

}



 
// function ilerle(){
//    const activeSlide =document.querySelector('.avtice');
//    activeSlide.classList.remove('active');


//    if(activeSlide.nextElementSibling){
//     activeSlide.nextElementSibling.classList.add('active');
//    }
//    else{
//     image[0].classList.add('active');
//    }
// }
// function geriyedon(){
//     const activeSlide=document.querySelector('.active')
//     activeSlide.classList.remove('active');
//     if(activeSlide.previousElementSibling){
//         activeSlide.previousElementSibling.add('active');
//     }
//     else{
//         image[image.length-1].classList.add('active');
//     }







