var thisIsANumber = 12;
var thisIsANumberAsString = thisIsANumber + "";
console.log(thisIsANumberAsString); // prints: "12"

thisIsANumberAsString = "12";
thisIsANumber = thisIsANumberAsString - 0;
console.log(thisIsANumber); // prints: 12