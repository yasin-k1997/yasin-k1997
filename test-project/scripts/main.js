var myImage = document.querySelector('img');
myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/car.jpg') {
		myImage.setAttribute('src','images/car2.jpg');
	} else {
		myImage.setAttribute('src','images/car.jpg');
	}
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
	function setUserName() {
		var myName = prompt('Please Enter your name: ');
		localStorage.setItem('name', myName);
		myHeading.textContent = myName + '   loves car';

	}

	if(!localStorage.getItem('name')) {
		setUserName();
	} else {
		var storedName = localStorage.getItem('name');
		myHeading.textContent = storedName + ' loves car';
	}
	myButton.onclick = function() {
		setUserName();
	}