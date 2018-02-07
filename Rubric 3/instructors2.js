// JavaScript Document

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