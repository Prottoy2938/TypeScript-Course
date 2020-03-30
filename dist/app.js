"use strict";
var DepartMent = (function () {
    function DepartMent(name, id) {
        this.name = name;
        this.id = id;
        this.employee = [];
    }
    DepartMent.prototype.describe = function (age) {
        console.log("department is ", this.name, ". Age is ", age);
    };
    DepartMent.prototype.addEmployee = function (name) {
        this.employee.push(name);
    };
    DepartMent.prototype.getEmployeeInformation = function () {
        console.log(this.employee.length);
        console.log(this.employee);
    };
    return DepartMent;
}());
var myClass = new DepartMent("Science", 45);
myClass.addEmployee("Prottay");
myClass.addEmployee("Rudra");
myClass.getEmployeeInformation();
//# sourceMappingURL=app.js.map