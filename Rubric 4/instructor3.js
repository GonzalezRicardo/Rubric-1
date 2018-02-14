// JavaScript Document

var myDemo = document.getElementById( "demoparent");
console.log (myDemo.childNodes.length);

var myDemoTags = document.getElementsByTagName( "li") ;
console.log ("Number of li links : " + myDemoTags.length) ;

var linksInMenu = myDemo.getElementsByTagName("li");
console.log ("number of li links : " + linksInMenu.length) ;

var myComments = document.getElementById("commentary") ;
myComments.setAttribute("align", "right" ); 

myComments.setAttribute("style", "color: lightgreen");

var myChangeAttibutes = document.getElementById("demoparent") ;
myChangeAttibutes.setAttribute("align", "right" ); 

myChangeAttibutes.setAttribute("style", "color: lightgray");

var newItem = document.createElement("li");
var newText = document.createTextNode("Welcome to my navbar");
myDemo.appendChild(newItem);
newItem.appendChild(newText);

function myFunction() {
    document.getElementById("function1A").innerHTML = "<b><h3>Thank you come again!</h3></B>";
}

var myComments = document.getElementById("function1A") ;
myComments.setAttribute("align", "center" ); 

myComments.setAttribute("style", "color: black");
