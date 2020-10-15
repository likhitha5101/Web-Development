function createRandomNumber() {
	// body...
	var num = Math.random();
	num = Math.floor(num * 6) + 1;
	return num;
}

var n1 = createRandomNumber();
var n2 = createRandomNumber(); 
document.querySelector(".img1").setAttribute("src","images/dice"+ n1 + ".png");
document.querySelector(".img2").setAttribute("src","images/dice"+ n2 + ".png");

if (n1 === n2 ){
	document.querySelector("h1").innerHTML="Draw !";
}
else if (n1 > n2){
	document.querySelector("h1").innerHTML="🚩 Player 1 Wins..!";
}
else{
	document.querySelector("h1").innerHTML="Player 2 Wins..! 🚩";
}
