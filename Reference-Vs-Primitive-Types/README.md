## Code-From-My-JavaScript-Articles
Inspired from an exercise in Hackerrank.com, I found the opportunity to present you the data types that can be found on JavaScript, which are the following six:

- undefined
- null
- number
- string
- boolean
- object

Arrays and functions are objects and therefore belong to the object data type.

All data types except the object are called * primitive*  or * value*  types. Each variable of this category has its own copy of the value and operating on one of two variables that contain the same value is not affecting the value of the second variable. Here is an example:

```
var isDoorOpened = false;
var numberOfDoors = 4;
var nameOfDoor = "the main door";
var aVariableWithAnUndefinedValue;
var aVariableWithANullValue = null;
var aTestVariable = null;

aTestVariable = isDoorOpened;
aTestVarialbe = 1;
console.log(isDoorOpened);
// isDoorOpened's value is still false
```

The object data type is a *reference* type which means that a reference to the object is stored in the variable. If two variables contain the same reference to an object, then operating on one variable will change the object and affect the value on the second variable. Here is an example:

```
var human = {
    name: "Christos"
}

var aNewHuman = human;
aNewHuman.name = "Max";
console.log(human.name);
// human.name will not print "Christos" but "Max"
```