// const obj: {
//   name: string;
//   space: string;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Prottay",
//   space: "Yes",
//   hobbies: ["programming", "Reading Space Books"],
//   role: [1, "admin"]
// };

// for (const hobby of obj.hobbies) {
//   console.log(hobby.toUpperCase());
// }

// obj.role[1] = "as";

// let customizedArray: (string | number)[];

// customizedArray = ["hi", "hello", 90];
// interface Loose {
//   [key: string]: string;
// }

// const data: Loose = { name: "Prottay" };

// data.lastName = "Rudra";
// data.light = "sun";

// console.log(data);

//

function combine(
  num1: number | string,
  num2: number | string,
  resultConversation: "as-number" | "as-string"
) {
  if (
    (typeof num1 === "number" && typeof num2 === "number") ||
    resultConversation === "as-number"
  ) {
    return +num1 + +num2;
  } else {
    return num1.toString() + num2.toString();
  }
}
console.log(combine("1", "4", "as-number"));
console.log(combine(1, 4, "as-number"));
console.log(combine("Hello ", "World", "as-string"));
