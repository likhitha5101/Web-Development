//Detecting button press

for ( var i = 0; i < document.querySelectorAll(".drum").length; i++){ 
	document.querySelectorAll("button")[i].addEventListener("click",function(){
		var buttonInnerHtml = this.innerHTML;
		makeSound(buttonInnerHtml);
		animation(buttonInnerHtml);
	});


}


// detecting keyboard press

document.addEventListener("keydown",function(event) {
	makeSound(event.key);
	animation(event.key);
});


function makeSound(key) {
	// body...
	
	
	var audio;

	switch(key){ 
		case "w" : 
			audio = new Audio("sounds/tom-1.mp3");
			audio.play();
			break;
		case "a" : 
			audio = new Audio("sounds/tom-2.mp3");
			audio.play();
			break;
		case "s" : 
			audio = new Audio("sounds/tom-3.mp3");
			audio.play();
			break;
		case "d" : 
			audio = new Audio("sounds/tom-4.mp3");
			audio.play();
			break;
		case "j" : 
			audio = new Audio("sounds/snare.mp3");
			audio.play();
			break;
		case "k" : 
			audio = new Audio("sounds/crash.mp3");
			audio.play();
			break;
		case "l" : 
			audio = new Audio("sounds/kick-bass.mp3");
			audio.play();
			break;

		default : console.log(buttonInnerHtml);
	}
	
}

function animation(currentKey) {
	// body...
	var activeButton = document.querySelector("." + currentKey);

	activeButton.classList.add("pressed");

	setTimeout(function () {
		activeButton.classList.remove("pressed");
	},100);

}