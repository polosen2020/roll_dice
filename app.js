var scores, roundScore, activePlayer,dice,viewScore,gamePlaying,prevScore;



/*scores = [0,0];
roundScore = 0;
activePlayer = 0;*/
init();





 document.querySelector(".btn-roll").addEventListener("click",function () {

 	if(gamePlaying){
 		//calculate dice
 		dice = Math.floor(Math.random()*6)+1;
	//show the number on cuurent player score
	document.querySelector("#current-"+activePlayer).textContent = dice;

	var diceDisplay =  document.querySelector(".dice");
	diceDisplay.style.display ="block";
	diceDisplay.src = 'dice-'+ dice +'.png';
	
	
	

	//add the number but if the dice does not rolled as 1
	if(dice !== 1){
		
			roundScore += dice;
			document.querySelector("#current-" + activePlayer).textContent= roundScore ;
	
		
		}
	else{
		//next player
		nextPlayer();
	}	
 	}
 });

 var hold = document.querySelector(".btn-hold");

 hold.addEventListener("click",function () {

 	if(gamePlaying){
 		// add current score to global score
 	scores[activePlayer] += roundScore;
 	document.getElementById("score-"+activePlayer).textContent = scores[activePlayer];

 	if(scores[activePlayer]>=10)
		{
			document.querySelector("#name-"+activePlayer).textContent = "Winner!";
			document.querySelector(".dice").style.display = "none";
			document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");
			document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");
			gamePlaying = false;
		}
		else{
			nextPlayer();
		}
 	}
 	
 });  

function nextPlayer() {
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
		roundScore =  0;


		document.getElementById("current-0").textContent= '0';
		document.getElementById("current-1").textContent= '0';

		document.querySelector(".player-0-panel").classList.toggle("active");
		document.querySelector(".player-1-panel").classList.toggle("active");

		document.querySelector(".dice").style.display ="none";

}
document.querySelector(".btn-new").addEventListener("click",init);
function init() {
	scores = [0,0];
	    roundScore = 0;
		activePlayer = 0;
		gamePlaying = true;
		document.querySelector(".dice").style.display ="none";

document.getElementById("score-0").textContent= '0';
document.getElementById("score-1").textContent= '0';
document.getElementById("current-0").textContent= '0';
document.getElementById("current-1").textContent= '0';

document.querySelector("#name-0").textContent = "Player 1";
document.querySelector("#name-1").textContent = "Player 2";

document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("winner");

document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-1-panel").classList.remove("active");

document.querySelector(".player-0-panel").classList.add("active");


}