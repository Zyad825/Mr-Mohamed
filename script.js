function stopMarquee(){
    document.getElementById("marquee").stop();
}
function startMarquee(){
    document.getElementById("marquee").start();
}

function ropoat(){
    if(form1.pass1.value<=8){
        document.getElementById('ShowError').innerHTML+="يرجي أدخال كامه مرور أكثر من 8 احرف"
        return false
    }else{
        return true;
    }
    if(form1.text1.value==0){
        document.getElementById('ShowErrorName').innerHTML+="أدخل أسمك بطريقه صحيحه حتي تشارك في الماسبقه"
        return false
    }else{
        return true;
    }
}
document.getElementById('clear1').addEventListener('click',function(){
    document.querySelector('.BoxItems').style.border='2px dashed red';
      document.querySelector('.BoxItems').style.animationName='Aniborder';
      document.querySelector('.BoxItems').style.animationDuration='2s';
      document.querySelector('.BoxItems').style.animationIterationCount=' infinite';
})
let span=document.querySelector('.up');
window.onscroll = function(){
 if (this.scrollY >=900) {
    span.classList.add('show')
 }else{
    span.classList.remove('show')
 }
    
};
span.onclick = function () {
    window.scrollTo({
        top:0 ,
        behavior:"smooth",
    });
};
let span1=document.querySelector('.down');
span1.onclick = function () {
    window.scrollTo({
        top:1125,
        behavior:"smooth",
    });
};
