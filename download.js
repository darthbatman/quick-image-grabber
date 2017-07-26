var controlPressed = false;

document.onkeydown = function(e) {

	if (e.keyCode == 17){

		controlPressed = true;

	}
	else if (controlPressed == true && e.keyCode == 68){

		controlPressed = false;

		var largestArea = 0;

		var largestAreaIndex = -1;

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

		if (document.querySelectorAll('.irc_mi').length > 0){

			chrome.runtime.sendMessage(document.querySelectorAll('.irc_mi')[1].getAttribute('src'));

		}
		else if (largestAreaIndex != -1){

			chrome.runtime.sendMessage(document.querySelectorAll('[src]')[largestAreaIndex].getAttribute('src'));

		}

	}
	else {

		controlPressed = false;

	}
	
};