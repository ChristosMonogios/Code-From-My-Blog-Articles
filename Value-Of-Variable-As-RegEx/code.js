var testString = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.";

var matches = testString.match(/a/g).length; // do this for all the remaining letters

var letterToMatch = "a"; 
matches = testString.match(/letterToMatch/g); // returns null

matches = testString.match(letterToMatch); // returns ["a"]

var rgxp = new RegExp(letterToMatch, "g");
matches = testString.match(rgxp).length;