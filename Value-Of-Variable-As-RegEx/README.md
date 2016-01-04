### Using a variable as a regular expression to find all matches inside a string
Often I have to use a value from a variable and not a fixed string inside a regular expression. For example if I wanted to iterate over the english alphabet and find the number of occurences of each letter inside a string, I had to do something like the following:

```
var testString = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.";
var matches = testString.match(/a/g).length;
// do this for all the remaining letters
```
the previous example would work and would found all occurences of "a".

However, if I wanted to use a variable to store the searched letter, then the following would not return anything, since the name and not the value of letterToMatch variable would be parsed as string:
```
var letterToMatch = "a"; 
var testString = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.";
var matches = testString.match(/letterToMatch/g);
```

the following would work, but would only return the first occurence of the letter:
```
var letterToMatch = "a"; 
var testString = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.";
var matches = testString.match(letterToMatch);
```

So what is the solution if we wanted to use the value of a variable as a regular expression and also find all the occurences of this value inside a string?
```
var letterToMatch = "a"; 
var testString = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.";
var rgxp = new RegExp(letterToMatch, "g");
var matches = testString.match(rgxp).length;
```

Using the **RegExp** Object and creating a new instance of it, we can define as second parameter the modifier that affects the matching of the first parameter.
The available modifiers are the following:
- i: case-insensitive match
- g: find all matches
- m: multiline matching