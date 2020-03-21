const obj: {
  name: string;
  space: string;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Prottay",
  space: "Yes",
  hobbies: ["programming", "Reading Space Books"],
  role: [1, "admin"]
};

let customizedArray: (string | number)[];

customizedArray = ["hi", "hello", 90];

for (const hobby of obj.hobbies) {
  console.log(hobby.toUpperCase());
}

obj.role[1] = "as";

interface looseObject {
  [key: string]: string;
}

const data: looseObject = { name: "Prottay" };

data.lastName = "Rudra";

console.log(customizedArray, data);
