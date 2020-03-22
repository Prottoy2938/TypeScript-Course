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
var Role;
(function (Role) {
    Role[Role["AUTHOR"] = 54] = "AUTHOR";
    Role[Role["ADMIN"] = 55] = "ADMIN";
    Role[Role["READ_ONLY"] = 56] = "READ_ONLY";
})(Role || (Role = {}));
var person = {
    name: "Prottay Rudra",
    treeLeaves: "Green",
    data: Role.AUTHOR
};
if (Role.ADMIN === 55)
    console.log(Role.ADMIN);
