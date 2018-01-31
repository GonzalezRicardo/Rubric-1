// JavaScript Document

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
    		document.getElementById("demo").innerHTML = txt;
			
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



