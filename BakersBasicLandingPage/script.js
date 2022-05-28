let btn1= document.getElementById('btn1');
let btn2= document.getElementById('btn2');
let btn3= document.getElementsByClassName('btns')

window.addEventListener('scroll',()=>{
	value=window.scrollY;
	btn1.style.left=value+'px';
	btn1.style.top=value+'px';
	btn2.style.right=value+'px';
	btn2.style.top=value+'px';
})

let demo=document.getElementById('demo');
var i = 0;
var txt = 'A recipe is a set of instructions that describes how to prepare or make something, especially a dish of prepared food.';
var speed = 50;

setInterval(()=>{
	if (i < txt.length) {
		demo.innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
},10)


window.addEventListener('load',()=>{
	body.style.backgroundImage='url(city1.jpeg)';


})