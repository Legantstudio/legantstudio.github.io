function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Move() {
	
	var Rint = getRandomInt(0,3);
	var block = document.getElementById("block");
	
	console.log(Rint);

	var size = 50;

	switch (Rint) {
		// left
		case 0: block.style.transform += "translateX(-"+size+"px)"; break; 
		// right
		case 1: block.style.transform += "translateX("+size+"px)";break;
		// up
		case 2: block.style.transform += "translateY(-"+size+"px)";break;
		// down
		case 3: block.style.transform += "translateY("+size+"px)";
	}

}
var timerID;
function Start(){
	timerID = setInterval(function(){Move()}, 500);

	document.getElementById("start-btn").style.display = "none";
	document.getElementById("stop-btn").style.display = "block";
}
function Stop(){
	setTimeout(function(){clearInterval(timerID);});

	document.getElementById("start-btn").style.display = "block";
	document.getElementById("stop-btn").style.display = "none";
}


