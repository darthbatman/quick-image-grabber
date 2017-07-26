var controlPressed = false;

document.onkeydown = function(e) {

	if (e.keyCode == 17){

		controlPressed = true;

	}
	else if (controlPressed == true && e.keyCode == 68){

		controlPressed = false;

		var largestArea = 0;

		var largestAreaIndex = -1;

		var currentGoogleImage = "";

		var divs = document.getElementsByTagName("div");

		for (var i = 0; i < divs.length; i++){

		   if (divs[i].style.transform == "translate3d(0px, 0px, 0px)"){

		   	if (divs[i].childNodes[0].className.split(" ")[0] == "irc_t"){

		   		console.log(divs[i].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0].getAttribute('src'));

		   		currentGoogleImage = divs[i].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0].getAttribute('src');

		   	}

		   }

		}

		for (var i = 0; i < document.querySelectorAll('[src]').length; i++) {

		  var item = document.querySelectorAll('[src]')[i];

		    if(item.getAttribute('src') !== null){

		         if (item.tagName == "IMG"){

		         	if (parseInt(item.clientWidth) * parseInt(item.clientHeight) > largestArea) {

		         		largestArea = parseInt(item.clientWidth) * parseInt(item.clientHeight);

		         		largestAreaIndex = i;

		         	}

		         }

		    }

		}

		if (currentGoogleImage.length > 0){

			chrome.runtime.sendMessage(currentGoogleImage);

		}
		else if (largestAreaIndex != -1){

			chrome.runtime.sendMessage(document.querySelectorAll('[src]')[largestAreaIndex].getAttribute('src'));

		}

	}
	else {

		controlPressed = false;

	}
	
};