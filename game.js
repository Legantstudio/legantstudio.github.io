// Getting random number for moving
function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var size = 50;
const Xdef = 485.5;
const Ydef = 657;
var X = 485.5;
var Y = 657;
var counter = 0;
var block = document.getElementById("block");
var scoreline = document.getElementById("scr");
var mana = 0;
var manaline = document.getElementById("mana");



function Start(){
	timerID = setInterval(function(){Move()}, 500);
	timerID2 = setInterval(function(){ManaGain()}, 10000);

	document.getElementById("start-btn").style.display = "none";
	document.getElementById("stop-btn").style.display = "inline-block";
}
function Stop(){
	setTimeout(function(){clearInterval(timerID);});
	setTimeout(function(){clearInterval(timerID2);});

	document.getElementById("start-btn").style.display = "inline-block";
	document.getElementById("stop-btn").style.display = "none";
}
function Reset(){
	Stop();
	counter = 0;
	mana = 0;
	X = Xdef;
	Y = Ydef;
	block.style.top = X+"px";
	block.style.right = Y+"px";
	manaline.innerHTML = "Your mana: "+mana+"/5";
	scoreline.innerHTML = "Score: "+counter;
}
function ManaGain(){
	// Checking amount of mana
	// If mana is lower than 5 add more
	if (mana >= 5) {}
	else if (mana < 5){
		mana++;
	}	
}
function ResetPos(){
	X = Xdef;
	Y = Ydef;
	block.style.top = X+"px";
	block.style.right = Y+"px";
}
function Win(){	
	setTimeout(function(){clearInterval(timerID);});
	setTimeout(function(){clearInterval(timerID2);});
	alert("You're winnner! "+" Your score: "+counter+" points");
}
function Move() {
	
	counter++;
	scoreline.innerHTML = "Score: "+counter;
	manaline.innerHTML = "Your mana: "+mana+"/5";

	// Moving of player
	var Rint = getRandomInt(0,3);
	console.log(Rint);
	switch (Rint) {
		// left
		case 0: X -= size; break; 
		// up
		case 1: Y -= size; break;
		// right
		case 2: X += size; break;
		// down
		case 3: Y += size;
	}
	block.style.top = X+"px";
	block.style.right = Y+"px";

	// Teleport if player out of viewscreen
	if ((parseInt(block.style.top) < 35.5) || (parseInt(block.style.top) > 935.5) || (parseInt(block.style.right) > 1857) || (parseInt(block.style.right) < 7)) {
		ResetPos();
	}
	// Win if player in the finish
	if ((block.style.top == 85.5+"px") && (block.style.right == 1107+"px")) {
		Win();
	}
}
function UserMove(evt) {
		if ((mana > 0) && (document.getElementById("start-btn").style.display == "none")) {
			mana--;
			switch (evt.which) {
				// left
			case 37: Y += size; counter++; break;
				// up
			case 38: X -= size; counter++; break;
				// right
			case 39: Y -= size; counter++; break;
				// down
			case 40: X += size; counter++;
			}
			block.style.top = X+"px";
			block.style.right = Y+"px";					
	}
		// Win if player in the finish
	if ((block.style.top == 85.5+"px") && (block.style.right == 1107+"px")) {
		Win();
	}
}