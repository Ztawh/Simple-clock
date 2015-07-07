document.addEventListener('DOMContentLoaded', function () {
	setInterval(updateClock, 200);
	setInterval(changeColor,1000);
});
function updateClock() {
	var now = new Date();

	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();

	if(hours < 10) {
		hours = "0" + hours;
	}
	if(minutes < 10) {
		minutes = "0" + minutes;
	}
	if(seconds < 10) {
		seconds = "0" + seconds;
	}

	var elem = document.getElementById("clock");

	elem.innerHTML = hours + ":" + minutes + ":" + seconds;
}

function changeColor() {
	var hour = new Date().getHours();

	if(hour >= 0 && hour <= 11){
		var r = 44;
		var g = 122;
		var b = 140;

		var newr = r + 5 * hour;
		var newg = g + 5 * hour;
		var newb = b + 5 * hour;
		var color = [newr, newg, newb];

		var elem = document.getElementById("color");
		elem.style.backgroundColor = "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")";
	}

	if(hour >= 12 && hour <= 23){
		var r = 159;
		var g = 237;
		var b = 255;

		var newr = r - 5 * hour;
		var newg = g - 5 * hour;
		var newb = b - 5 * hour;
		var color = [newr, newg, newb];

		var elem = document.getElementById("color");
		elem.style.backgroundColor = "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")";
	}
}
