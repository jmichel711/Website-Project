var Button1=document.getElementById('alternative1');
var Button2=document.getElementById('alternative2');
var Button3=document.getElementById('alternative3');
var Button4=document.getElementById('alternative4');
var Button5=document.getElementById('alternative5');
var Button6=document.getElementById('alternative6');
var Button7=document.getElementById('alternative7');

Button.addEventListener('click',function(){
    var inputText = document.getElementById("input-text").value.length;
    if(inputText > 10){
    alert('You have a long name!');
    
} else {
    alert("You have a short name!");
   
}
    
},false);
var background=document.body.style.backgroundColor;
var font=document.body.style.fontFamily;

Button1.addEventListener('click',function () 
{
    alert('You changed to color to blue');
  document.body.style.backgroundColor = 'blue';
},false);

Button2.addEventListener('click',function () 
{
    alert('You changed the color to Yellow');
  document.body.style.backgroundColor = 'Yellow';
},false);

Button3.addEventListener('click',function () 
{
    alert('You changed the color to Black');
  document.body.style.backgroundColor = 'Black';
},false);

Button4.addEventListener('click',function () 
{
    alert('You changed the color to Green');
  document.body.style.backgroundColor = 'Green';
},false);

Button5.addEventListener('click',function () 
{
    alert('You changed the color to Purple');
  document.body.style.backgroundColor = 'Purple';
},false);

Button6.addEventListener('click',function () 
{
    alert('You changed the to Font');
  document.body.style.fontFamily = 'Comic Sans MS';
},false);

Button7.addEventListener('click',function () 
{
    alert('You changed the to Font');
  document.body.style.fontFamily = 'Arial Black';
},false);

