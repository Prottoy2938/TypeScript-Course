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

interface Loose {
  [key: string]: string | number;
}

enum Role {
  AUTHOR = 54,
  ADMIN,
  READ_ONLY
}

const person: Loose = {
  name: "Prottay Rudra",
  treeLeaves: "Green",
  data: Role.AUTHOR
};
if (Role.ADMIN === 55) console.log(Role.ADMIN);
