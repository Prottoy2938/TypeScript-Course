"use strict";
function add(num1, num2, printValue, showStr) {
    if (printValue) {
        console.log(showStr, num1 + num2);
        return;
    }
    return num1 + num2;
}
var number1 = 21;
var number2 = 3;
var showResult = true;
var str = "Result is: ";
var test = "as"; //If we use `let`, typescript will automatically find the value type and sets that type as the type for that variable. No need to explicitly define type.
//test = 33; //shows error, because it's type was set to `string`
test = "as";
console.log(test);
add(number1, number2, showResult, str);
