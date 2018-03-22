// JavaScript Document
//...
//Alert window.....................................

	function myOwn () {
		alert ("CONGRATULATIONS! ...You made it to my custom alert pop up window!") ; 
		}

//Prompt window....................................

	function myOwnPromt() {
		var txt;
    	var person = prompt("Please enter your name:", "ex. (Ricardo)");
    		if (person == null || person == "") {
        	txt = "User cancelled the prompt."; } 
			else {
        	txt = "Hello " + person + "! I hope you are having a blessed day today! Here is youre fortune of the day: Keep in mind " + person + " its the journey and not the destination that counts. ";
    		}
    		document.getElementById("myPrompt").innerHTML = txt;
			
		var person = prompt("How old are you going to be this year?");
			if (person<21) {
				alert (" Cool! Its nice to meet you. You are much yonger than I am! Im goin to be 22 in july!") }
			if (person>21) {
				alert (" Cool! Its nice to meet you. Your older than I am! Im 21 years of age :)") }
	}
	
//Fuction window....................................

	function myOwnFunction() {

	function addNumbers (a, b) {
		var addTotal= a +b;
		alert ( addTotal ) ;
	}


	addNumbers ( 2, 3 ) ;

	}

//Return Function window............................

	function myOwnnFunction() {

	function numb (a, b, c, d) {
		var addedTotal= a *b -c +d;
		return addedTotal;

	}


		var numb1= numb ( 10, 12, 35, 8 ) ;
		alert (numb1) ;

	}


//Switch Statement window...........................

	function myOwnSwitch() {
	
	
	var intsructorName= prompt (" Who is going to win this years super bowl? Patriots or the Eagels?");

	switch ( intsructorName ) {
		case "Patriots" :
		alert ("You are totally right ! New England is taking it this year :)") ;
		break;
	
		case "Eagels" :
		alert ("Uhh, i dont think so. Wrong answer :)");
		break;
		
		default :
		alert ("That is not a contender for this years Super Bowl") ;
	}

	}



//While Loop............................

function myWhileLoop() {
	var age = 5;
	while (age < 10) {
	alert (age);
		console.log("your age in less than 10");
			age++;
}
		document.write("you are now over 10");
}

//For Loop............................

function myForLoop() {
	var months = ["January - 31 days",
		"February - 28 days in a common year and 29 days in leap years",
		"March - 31 days",
		"April - 30 days",
		"May - 31 days",
		"June - 30 days",
		"July - 31 days",
		"August - 31 days",
		"September - 30 days",
		"October - 31 days",
		"November - 30 days",
		"December - 31 days"];
	var i, len, text;
	for (i = 0, len = months.length, text = ""; i < len; i++) {
		text += months[i] + "<br>";
}
	document.getElementById("demo1").innerHTML = text;
}




var simon = document.getElementById("simon");
var bruce = document.getElementById("bruce");
var ben = document.getElementById("ben");

simon.addEventListener("click", picLink);
bruce.addEventListener("click", picLink);
ben.addEventListener("click", picLink);

function picLink () {
	var allImages = document.querySelectorAll("img");
	
	for ( var i = 0; i <allImages.length; i++) {
		allImages[i].classname = "hide";
	}
	
	
	var picId = this.attributes ["data-img"].value;
	var pic = document.getElementById(picId);
	if (pic.className === "hide" ) {
		pic.className = "";
	} else {
		pic.className = "hide";
	}
}









