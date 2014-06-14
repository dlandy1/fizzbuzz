$(document).ready(function() {
	var fizz = "<p>fizz</p>";
	var buzz = "<p>buzz</p>";
	var fizzbuzz= "<p>fizzbuzz</p>";
	var sent = "<p> </p>"
	var integer= prompt("Put in a number");
	var error = true;
	var count = function(integer){
		while (error) {
	if (integer >0 ==false || integer%1 !== 0 || integer >100) {
		integer= prompt("You must put in a number and it must be between 1-100, put in a number");
	}
	else{
		error = false;
		for (var i = 1; i <= integer; i++) {
		if(i%3 == 0 && i%5 == 0){
			$("body").append(fizzbuzz); 
		}
		else if (i%5 == 0) {
			$("body").append(buzz); 
		}
		else if (i%3 == 0) {
			$("body").append(fizz); 
		}
		else{
		$("body").append(sent).append(i);
	}
	}
	}
	}
	};
	count(integer);
});