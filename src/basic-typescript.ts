function add(num1: number, num2: number, printValue: boolean, showStr: string) {
  if (printValue) {
    console.log(showStr, num1 + num2);
    return;
  }
  return num1 + num2;
}
const number1 = 21;
const number2 = 3;
const showResult = true;
const str = "Result is: ";

let test = "as"; //If we use `let`, typescript will automatically find the value type and sets that type as the type for that variable. No need to explicitly define type.
//test = 33; //shows error, because it's type was set to `string`

test = "as";
console.log(test);
add(number1, number2, showResult, str);
