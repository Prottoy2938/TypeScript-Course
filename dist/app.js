"use strict";
class DepartMent {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.employee = [];
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
const myClass = new DepartMent("Science", 45);
myClass.addEmployee("Prottay");
myClass.addEmployee("Rudra");
myClass.getEmployeeInformation();
//# sourceMappingURL=app.js.map