(function (window) {

var GoodbyeSpeaker = {};

var speakWord = "Good Bye";

GoodbyeSpeaker.speak = function (name) {
	
console.log(speakWord + " " + name);
}

window.GoodbyeSpeaker= GoodbyeSpeaker;
})(window);