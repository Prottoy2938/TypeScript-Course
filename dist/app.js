"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DepartMent = (function () {
    function DepartMent(name, id) {
        this.name = name;
        this.id = id;
        this.employee = [];
    }
    DepartMent.prototype.describe = function () {
        console.log("department is ", this.name);
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
var itDepartment = (function (_super) {
    __extends(itDepartment, _super);
    function itDepartment(id, admins) {
        var _this = _super.call(this, "it", id) || this;
        _this.admins = admins;
        return _this;
    }
    return itDepartment;
}(DepartMent));
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, "Accounting", id) || this;
        _this.reports = reports;
        return _this;
    }
    AccountingDepartment.prototype.addReports = function (r) {
        this.reports.push(r);
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(DepartMent));
var it = new itDepartment(45, ["hello"]);
var accountingDepartment = new AccountingDepartment(3, [
    "Everything looks okay"
]);
it.describe();
it.addEmployee("Prottay");
it.addEmployee("Rudra");
it.getEmployeeInformation();
console.log(it);
console.log(accountingDepartment);
accountingDepartment.addReports("Wifi is so slow");
accountingDepartment.printReports();
//# sourceMappingURL=app.js.map