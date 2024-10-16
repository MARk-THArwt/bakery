const screen=window.innerWidth;
if(screen<512)
{
    document.getElementById("im").src="https://www.engage.veented.com/bakery/wp-content/uploads/sites/27/2017/08/bakery-color.png";
}
const x=document.getElementById("nav")
addEventListener('scroll',function(){
    x.classList.toggle("scroled",window.scrollY>0)
    if(screen>513){
    if(window.scrollY>0)
    {
        document.getElementById("im").src="https://www.engage.veented.com/bakery/wp-content/uploads/sites/27/2017/08/bakery-color.png";
    }else{document.getElementById("im").src="http://www.engage.veented.com/bakery/wp-content/uploads/sites/27/2017/08/bakery-light-1.png";}
}})
document.getElementById('options').addEventListener('click',function(){
    document.getElementById("settings").classList.toggle("vis")
    document.getElementById("servise").classList.toggle("mov")
})
document.getElementById('color1').addEventListener('click',function(){
    for(let i=0;i<6;i++){document.getElementsByClassName("chang-color")[i].style.background='rgb(33, 143, 230)'}
    for(let i=0;i<4;i++){document.getElementsByClassName("chang-fcolor")[i].style.color='rgb(33, 143, 230)'}
})
document.getElementById('color2').addEventListener('click',function(){
    for(let i=0;i<6;i++){document.getElementsByClassName("chang-color")[i].style.background='#f44336'}
    for(let i=0;i<4;i++){document.getElementsByClassName("chang-fcolor")[i].style.color='#f44336'}
})
document.getElementById('color3').addEventListener('click',function(){
    for(let i=0;i<6;i++){document.getElementsByClassName("chang-color")[i].style.background='#e91e63'}
    for(let i=0;i<4;i++){document.getElementsByClassName("chang-fcolor")[i].style.color='#e91e63'}
})
document.getElementById('color4').addEventListener('click',function(){
    for(let i=0;i<6;i++){document.getElementsByClassName("chang-color")[i].style.background='#9c27b0'}
    for(let i=0;i<4;i++){document.getElementsByClassName("chang-fcolor")[i].style.color='#9c27b0'}
})
document.getElementById('color5').addEventListener('click',function(){
    for(let i=0;i<6;i++){document.getElementsByClassName("chang-color")[i].style.background='#673ab7'}
    for(let i=0;i<4;i++){document.getElementsByClassName("chang-fcolor")[i].style.color='#673ab7'}
})
document.getElementById('color6').addEventListener('click',function(){
    for(let i=0;i<6;i++){document.getElementsByClassName("chang-color")[i].style.background='#3f51b5'}
    for(let i=0;i<4;i++){document.getElementsByClassName("chang-fcolor")[i].style.color='#3f51b5'}
})
document.getElementById('color7').addEventListener('click',function(){
    for(let i=0;i<6;i++){document.getElementsByClassName("chang-color")[i].style.background='#2196f3'}
    for(let i=0;i<4;i++){document.getElementsByClassName("chang-fcolor")[i].style.color='#2196f3'}
})
document.getElementById('color8').addEventListener('click',function(){
    for(let i=0;i<6;i++){document.getElementsByClassName("chang-color")[i].style.background='#03a9f4'}
    for(let i=0;i<4;i++){document.getElementsByClassName("chang-fcolor")[i].style.color='#03a9f4'}
})
document.getElementById('color9').addEventListener('click',function(){
    for(let i=0;i<6;i++){document.getElementsByClassName("chang-color")[i].style.background='#00bcd4'}
    for(let i=0;i<4;i++){document.getElementsByClassName("chang-fcolor")[i].style.color='#00bcd4'}
})
document.getElementById('color10').addEventListener('click',function(){
    for(let i=0;i<6;i++){document.getElementsByClassName("chang-color")[i].style.background='#009688'}
    for(let i=0;i<4;i++){document.getElementsByClassName("chang-fcolor")[i].style.color='#009688'}
})
document.getElementById('color11').addEventListener('click',function(){
    for(let i=0;i<6;i++){document.getElementsByClassName("chang-color")[i].style.background='#4caf50'}
    for(let i=0;i<4;i++){document.getElementsByClassName("chang-fcolor")[i].style.color='#4caf50'}
})
document.getElementById('color12').addEventListener('click',function(){
    for(let i=0;i<6;i++){document.getElementsByClassName("chang-color")[i].style.background='#8bc34a'}
    for(let i=0;i<4;i++){document.getElementsByClassName("chang-fcolor")[i].style.color='#8bc34a'}
})
document.getElementById('color13').addEventListener('click',function(){
    for(let i=0;i<6;i++){document.getElementsByClassName("chang-color")[i].style.background='#cddc39'}
    for(let i=0;i<4;i++){document.getElementsByClassName("chang-fcolor")[i].style.color='#cddc39'}
})
document.getElementById('color14').addEventListener('click',function(){
    for(let i=0;i<6;i++){document.getElementsByClassName("chang-color")[i].style.background='#ffc107'}
    for(let i=0;i<4;i++){document.getElementsByClassName("chang-fcolor")[i].style.color='#ffc107'}
})
document.getElementById('color15').addEventListener('click',function(){
    for(let i=0;i<6;i++){document.getElementsByClassName("chang-color")[i].style.background='#ff9800'}
    for(let i=0;i<4;i++){document.getElementsByClassName("chang-fcolor")[i].style.color='#ff9800'}
})
document.getElementById('color16').addEventListener('click',function(){
    for(let i=0;i<6;i++){document.getElementsByClassName("chang-color")[i].style.background='#ff5722'}
    for(let i=0;i<4;i++){document.getElementsByClassName("chang-fcolor")[i].style.color='#ff5722'}
})
document.getElementById('color17').addEventListener('click',function(){
    for(let i=0;i<6;i++){document.getElementsByClassName("chang-color")[i].style.background='#795548'}
    for(let i=0;i<4;i++){document.getElementsByClassName("chang-fcolor")[i].style.color='#795548'}
})
document.getElementById('color18').addEventListener('click',function(){
    for(let i=0;i<6;i++){document.getElementsByClassName("chang-color")[i].style.background='#607d8b'}
    for(let i=0;i<4;i++){document.getElementsByClassName("chang-fcolor")[i].style.color='#607d8b'}
})