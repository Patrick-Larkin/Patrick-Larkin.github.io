
//Function Performing copy and paste to clipboard
//Todo:Output phone number and email
//Todo: Apply to icon
var countDownDate = new Date("Jan 20, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

	// Get today's date and time
	var now = new Date().getTime();

	// Find the distance between now and the count down date
	var distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the result in an element with id="demo"
	document.getElementById("timer").innerHTML =
			'<div class="holder m-2 d-inline-flex"><span class="h1 font-weight-bold">' + days + ' D</div></span>'
			+ '<div class="holder m-2 d-inline-flex"><span class="h1 font-weight-bold">' + hours + ' H</div></span>'
			+ '<div class="holder m-2 d-inline-flex"><span class="h1 font-weight-bold">' + minutes + ' M</div></span>'
			+ '<div class="holder m-2 d-inline-flex"><span class="h1 font-weight-bold">' + seconds + ' S</div> </span>'

	// If the count down is over, write some text
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("demo").innerHTML = "EXPIRED";
	}
}, 1000);