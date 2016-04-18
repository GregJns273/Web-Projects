var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/new_life.jpg') {
		myImage.setAttribute ('src', 'images/mars-sun.jpg');
	} else {
		myImage.setAttribute ('src', 'images/new_life.jpg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1')

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Free Mars, '+ myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Free Mars, '+ storedName;
}

myButton.onclick = function() {
	setUserName();
}