### JavaScript refactoring tips
In this page I would like to share with you tips for making your JavaScript more effective and increase its performance.

####Store the length of an array in a variable and then use it in a for loop
Consider the following example:
```
var arr = [1,2,3,4,5];
for (var i=0; i<arr.length; i++) {
    console.log(arr[i]);
}
```
This code will iterate 5 times and check 5 times the length of the array, because the *i<arr.length* expression has to be evaluated in every iteration. For this example this will introduce no overhead, but when the array contains thousands of elements then the overhead is noticeable.

####Take advantage of the hoisting functionality
When we declare a variable, JavaScript moves the declaration on top of the scope that contains this variable, so the variable can be used everywhere inside its scope. I personaly declare and initialise the variables of a function at the beginning of the function.

