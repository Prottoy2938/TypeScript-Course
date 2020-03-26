const addAndHandle = (
  num1: number,
  num2: number,
  callback: (a: number) => void
) => {
  const result = num1 + num2;
  callback(result);
};

addAndHandle(2, 3, number => {
  console.log(number);
  return 9;
});
