// immutable strings:
var string1 = "LOREM IPSUM";
string1.toLowerCase();
console.log(string1);

// Array-function that make an array mutable:
// pop(): Removes the last element from an array:
var words = ["lorem", "ipsum"];
words.pop();
console.log(words) // words contains only one element

// push(): Adds a new element at the end of an array:
words = ["lorem", "ipsum"];
words.push("dolor");
console.log(words) // words contains three elements

// reverse(): reverses the elements of an array:
words = ["lorem", "ipsum", "dolor"];
words.reverse();
console.log(words) // the values of the array are reversed

// shift(): removes the first element of an array:
words = ["lorem", "ipsum", "dolor"];
words.shift();
console.log(words) // word contains two values

// sort(): sort an array alphabetically:
words = ["lorem", "ipsum", "dolor"];
words.sort();
console.log(words) // ["dolor", "ipsum", "lorem"]

// splice(): adds multiple items into an array:
words = ["lorem"];
words.splice(1, 0, "ipsum", "dolor");
console.log(words) // ["lorem", "ipsum", "dolor"]

// unshift(): adds a new element at the beggining of an array:
words = ["lorem", "ipsum"];
words.unshift("dolor");
console.log(words) // ["dolor", "lorem", "ipsum"]