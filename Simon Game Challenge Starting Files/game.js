var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level =0;

var started = false;

$(document).keypress( function () {
	if(!started){
		$("#level-title").text("Level "+level);
		nextSequence();
		started = true;
	}
	
});

$(".btn").click(function(){
	var userChosenColour = $(this).attr("id");

	userClickedPattern.push(userChosenColour);

	playSound(userChosenColour);
	animatePress(userChosenColour);
	checkAnswer(userClickedPattern.length -1);

});



function nextSequence() {
	// body...
	userClickedPattern = [];
	level++;

	$("#level-title").text("Level "+level);

	var randomNumber = Math.floor(Math.random()*4 );
	var randomChosenColour = buttonColours[randomNumber];
	gamePattern.push(randomChosenColour);

	//animate - flash
	$("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

	//play sounds
	playSound(randomChosenColour);
	

}

function playSound(name){

	var audio = new Audio("sounds/"+name+".mp3");
	audio.play();

}

function animatePress(currentColour) {
	// body...
	$("."+currentColour).addClass("pressed");

	setTimeout( function () {
		$("."+currentColour).removeClass("pressed");
	}, 100);
}

function startOver(){
	gamePattern = [];
	level =0;
	started = false;
}

function checkAnswer(currentLevel){

	if(userClickedPattern[currentLevel] === gamePattern[gamePattern.length - 1]){
		console.log("success");

        setTimeout(function () {
          nextSequence();
        }, 1000);
	}
	else{
		playSound("wrong");

		$("body").addClass("game-over");

		setTimeout( function(){
			$("body").removeClass("game-over");
		},200);

		$("#level-title").text("Game Over, Press Any Key to Restart ");
		startOver();
	}
}






