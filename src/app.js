/* eslint-disable no-unused-vars */
var sum = function (num1, num2) {
    return num1 + num2;
};
function printResult(num) {
    console.log("Result: ", num);
}
printResult(sum(5, 12));
var combineValues;
combineValues = sum;
console.log(combineValues(8, 8));
