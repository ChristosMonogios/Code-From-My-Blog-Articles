## "Type" Casting aka Coercion in Javascript. What you have to know
With this article I plan to give in a quick and simple way the most important ways to convert JavaScript from one value type to another.
Type casting is most often referred as coercion. There are two types of coercion. Explicit and implicit.
- Explicit coercion is, most of the times, obvious to the programmer who reads a part of JavaScript code.
- Implicit coercion is done more secretly and is not always obvious to the programmer, if she has not used an implicitly coercion operation before.

### Implicitly coercion
I am personally a great fun of implicitly coercion, since I think that, most of the times, it simplifies the resulted code extremely and removes unneeded complexity.

For the beginning, lets take a look at my favourite implicit operation of coercion for converting number into a string.
#### number to string
```
var thisIsANumber = 12;
var thisIsANumberAsString = thisIsANumber + "";
console.log(thisIsANumberAsString); // prints: "12"
```
as you can see the "+" operator is working as concatenation operation and not as numerical plus and converts the number into string, before concatenating it with the empty string on the right side.

and now lets do the opposite:
#### string to number
```
var thisIsANumberAsString = "12";
var thisIsANumber = thisIsANumberAsString - 0;
console.log(thisIsANumber); // prints: 12
```
In the previous example the "-" operator works only as numerical operator and for this reason the string has to be converted into number before the numerical operation with zero take place.

*TODO: add implicit coercion for other types combinations*