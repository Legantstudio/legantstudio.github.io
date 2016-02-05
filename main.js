function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function Start(){
	timerID = setInterval(function(){Move()}, 500);
	
	document.getElementById("start-btn").style.display = "none";
	document.getElementById("stop-btn").style.display = "inline-block";
}
function Stop(){
	setTimeout(function(){clearInterval(timerID);});

	document.getElementById("start-btn").style.display = "inline-block";
	document.getElementById("stop-btn").style.display = "none";
}
function Win(){
	alert("You're winnner!"+"Your score: "+counter+"points");
	setTimeout(function(){clearInterval(timerID);});
}

var size = 50;
var X = 485.5;
var Y = 657;
var counter = 0;
var block = document.getElementById("block");
var scoreline = document.getElementById("scr");

function Move() {
	
	var Rint = getRandomInt(0,3);

	counter++;
	scoreline.innerHTML = "Score: "+counter;

	switch (Rint) {
		// left
		case 0: X-=size; break; 
		// right
		case 1: X += size; break;
		// up
		case 2: Y -= size; break;
		// down
		case 3: Y += size;
	}

	block.style.top = X+"px";
	block.style.right = Y+"px";

	if ((X == 85.5) && (Y == 107)) {
		Win();
	}
}



