"use strict";
class DepartMent {
    constructor(n) {
        this.employee = [];
        this.name = n;
    }
    describe(age) {
        console.log("department is ", this.name, ". Age is ", age);
    }
    addEmployee(name) {
        this.employee.push(name);
    }
    getEmployeeInformation() {
        console.log(this.employee.length);
        console.log(this.employee);
    }
}
const myClass = new DepartMent("Science");
myClass.addEmployee("Prottay");
myClass.addEmployee("Rudra");
myClass.employee[2] = "Arafat";
myClass.getEmployeeInformation();
//# sourceMappingURL=app.js.map