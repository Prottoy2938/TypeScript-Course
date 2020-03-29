"use strict";
class DepartMent {
    constructor(n) {
        this.name = n;
    }
    describe(age) {
        console.log("department is ", this.name, ". Age is ", age);
    }
}
const accounting = new DepartMent("accounting");
console.log(accounting.describe(4));
const accountingCopy = { describe: accounting.describe };
const accountingCopy1 = { name: "physics", describe: accounting.describe };
console.log(accountingCopy.describe(22));
console.log(accountingCopy1.describe(22));
//# sourceMappingURL=app.js.map