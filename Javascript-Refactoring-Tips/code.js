// primitive types:
var isDoorOpened = false;
var numberOfDoors = 4;
var nameOfDoor = "the main door";
var aVariableWithAnUndefinedValue;
var aVariableWithANullValue = null;
var aTestVariable = null;

// reference type
var human = {
    name: "Christos"
}

// a simple test for primitive types
aTestVariable = isDoorOpened;
aTestVarialbe = 1;
console.log(isDoorOpened);

// a simple test for the object reference type
var aNewHuman = human;
aNewHuman.name = "Max";
console.log(human.name);