var scores, roundScore1,roundScore2, activePlayer,dice,viewScore,gamePlaying;

init();


var prevScore;

 document.querySelector(".btn-roll").addEventListener("click",function () {

 	if(gamePlaying){

 		if(activePlayer === 0){

 			dice1 = Math.floor(Math.random()*6)+1;

 			document.querySelector("#current-"+0).textContent = dice1;

			document.getElementById("dice-1").style.display="block";
			document.getElementById("dice-2").style.display="block";
			document.getElementById("dice-1").src = 'dice-'+ dice1 +'.png';
 		
 		//calculate dice
 		if(dice1 === 6 && prevScore === 6){
		scores[activePlayer] = 0;
		document.querySelector("#score-"+activePlayer).textContent = "0";
		nextPlayer();
		}
		else if(dice1 !== 1){
	
		roundScore1 += dice1;
		document.querySelector("#current-" + activePlayer).textContent= roundScore1 ;
		}
		else{
		//next player
		nextPlayer();
		}	
		prevScore = dice1;
 		}
 		else{
 			dice2 = Math.floor(Math.random()*6)+1;

 			document.querySelector("#current-"+1).textContent = dice2;

		document.getElementById("dice-1").style.display="block";
		document.getElementById("dice-2").style.display="block";
		document.getElementById("dice-2").src = 'dice-'+ dice2 +'.png';
 		
 		//calculate dice
 		

 		if(dice2 === 6 && prevScore === 6){
		scores[activePlayer] = 0;
		document.querySelector("#score-"+activePlayer).textContent = "0";
		nextPlayer();
		}
		else if(dice2 !== 1){
	
		roundScore2 += dice2;
		document.querySelector("#current-" + activePlayer).textContent= roundScore2;
		
		
		}
		else{
		//next player
		nextPlayer();
		}	
 		prevScore = dice2;
 		}
 }
 		
 });


 var hold = document.querySelector(".btn-hold");

 hold.addEventListener("click",function () {

 	if(gamePlaying){
 		// add current score to global score
 		if(activePlayer===0){
 	scores[activePlayer] += roundScore1;
 	}
 	else{
 		scores[activePlayer]+= roundScore2;
 	}
 	document.getElementById("score-"+activePlayer).textContent = scores[activePlayer];

 	var finalScore = Number(document.querySelector(".final-score").value);
 	var winningScore;
 	if(i=finalScore){
 		 winningScore = finalScore;
 	}
 	else{
 		winningScore = 10;
 	}

 	if(scores[activePlayer]>=winningScore)
		{
			document.querySelector("#name-"+activePlayer).textContent = "Winner!";

			document.getElementById("dice-1").style.display="none";
			document.getElementById("dice-2").style.display="none";

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
		roundScore1 = 0;
		roundScore2 = 0;


		document.getElementById("current-0").textContent= '0';
		document.getElementById("current-1").textContent= '0';

		document.querySelector(".player-0-panel").classList.toggle("active");
		document.querySelector(".player-1-panel").classList.toggle("active");

		document.getElementById("dice-1").style.display="none";
		document.getElementById("dice-2").style.display="none";

}
document.querySelector(".btn-new").addEventListener("click",init);
function init() {
	scores = [0,0];
	    roundScore1 = 0;
	    roundScore2 = 0;
		activePlayer = 0;
		gamePlaying = true;

		document.getElementById("dice-1").style.display="none";
		document.getElementById("dice-2").style.display="none";
		//document.querySelector(".dice").style.display ="none";

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