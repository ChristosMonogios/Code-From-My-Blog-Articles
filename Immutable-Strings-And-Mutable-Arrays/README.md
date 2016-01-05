### Immutable Strings And Mutable Arrays
Strings in JavaScript are **immutable** which means that once a string is defined, it cannot be changed anymore. An attempt to change a string with a standard String-function will only create a new string and not affect the original string. Consider the following example, where the value in *string1* is not changed:
```
var string1 = "LOREM IPSUM";
string1.toLowerCase();
console.log(string1);
```

On the other hand not all defined Array-functions are creating a new array instance, but they rather change and modify the original instance of an array, thus making the array **mutable**:
```
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
```


 