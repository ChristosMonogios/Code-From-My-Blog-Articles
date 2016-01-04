### Data types in Javascript
Inspired from an exercise in [Hackerrank.com](https://www.hackerrank.com/contests/30-days-of-code/challenges/day-1-data-types), I found the opportunity to present you the data types that are defined in JavaScript, which are the following six:

- undefined
- null
- number
- string
- boolean
- object

Arrays and functions are in JavaScript plain objects and therefore they belong to the object data type.

All data types except the object are called **primitive**  or **value**  types. Each variable of this category has its own copy of the assigned value and operating on one of many variables that contain the same value is not affecting the value that is referenced from the other variables. Here is an example pointing that out:

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

The object data type is a **reference** type which means that inside a variable a reference to the object is assigned. If two or more variables contain the same reference to an object, then operating on one variable will change the object and since the other variable reference the same object, this will affect the referenced value for all variables. Here is an example:

```
var human = {
    name: "Christos"
}

var aNewHuman = human;
aNewHuman.name = "Max";
console.log(human.name);
// human.name will not print "Christos" but "Max"
```
