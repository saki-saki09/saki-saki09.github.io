// JavaScript Function Setings!

//Variables  Decleared!

let point = 0;

//Counting Function Set!

function count(){
	points = point++;
	document.getElementById('count').innerHTML= points;
	document.getElementById('count-st-text').style.display = 'block';
	document.getElementById('startStop').style.display = 'none';
	window.setInterval(count, 1000);
}