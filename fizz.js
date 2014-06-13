$(document).ready(function() {
	var fizz = "<p>fizz</p>";
	var buzz = "<p>buzz</p>";
	var fizzbuzz= "<p>fizzbuzz</p>";
	var sent = "<p> </p>"
	var number= prompt("Put in a number");
	var error = true;
	while (error) {
	if (number >0 ==false || number%1 !== 0 || number >100) {
		number= prompt("You must put in a number and it must be between 1-100, put in a number");
	}
	else{
		error = false;
	}
	};
	for (var i = 1; i <= number; i++) {
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
	};
	};
})