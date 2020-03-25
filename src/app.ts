const sum = (num1: number, num2: number): number => {
  return num1 + num2;
};

const combine = (data: number): undefined => {
  console.log("Result is" + data);
  return;
};
// eslint-disable-next-line no-unused-vars
const combine1 = (data: number): void => {
  console.log("Result is" + data);
  return;
};
console.log(combine(sum(2, 9)));
