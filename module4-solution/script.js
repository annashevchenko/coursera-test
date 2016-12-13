
(function(window) {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var name in names) {

  var firstLetter = names[name].charAt(names[name]).toLowerCase();
  
    if (firstLetter === 'j') {
    GoodbyeSpeaker.speak(names[name]);
  } else {
    HelloSpeaker.speak(names[name]);
  }
}

} )
(window);

