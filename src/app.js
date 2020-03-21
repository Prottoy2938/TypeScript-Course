var obj = {
    name: "Prottay",
    space: "Yes",
    hobbies: ["programming", "Reading Space Books"],
    role: [1, "admin"]
};
var customizedArray;
customizedArray = ["hi", "hello", 90];
for (var _i = 0, _a = obj.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
console.log(customizedArray);
console.log(obj.name);
obj.role[1] = "as";
obj.role.push("hello");
console.log(obj.role, obj.role.length);
