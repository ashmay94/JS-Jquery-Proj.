var today = new Date ();
var hourNow = today.getHours();
var greeting;
if (hourNow > 18) {
	greeting = 'Good evening!';
} else if (hourNow > 12) {
	greeting = 'Good afternoon!';
} else if (hourNow > 0) {
	greeting = "Good Morning!"
} else {
	greeting = "welcome!";
}

document.write('<h3>' + greeting + '</h3>')

var username;
var message;
username = "Ashley";
message = "I am Ashley";

var elName = document.getElementById('name');
elName.textContent + username;
var elNote = document.getElementById('note');
elNote.textContent= message;