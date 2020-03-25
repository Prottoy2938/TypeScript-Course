/* eslint-disable no-unused-vars */
const sum = (num1: number, num2: number): number => {
  return num1 + num2;
};
function printResult(num: number): void {
  console.log("Result: ", num);
}

printResult(sum(5, 12));

let combineValues: (a: number, b: number) => number;
combineValues = sum;
console.log(combineValues(8, 8));
