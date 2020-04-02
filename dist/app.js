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
        console.log(DepartMent.data);
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
    DepartMent.createEmployee = function (name) {
        return { name: name };
    };
    DepartMent.data = "name";
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
    Object.defineProperty(AccountingDepartment.prototype, "getRecentReport", {
        get: function () {
            if (!this.reports) {
                throw new Error("No last report found");
            }
            return this.reports;
        },
        enumerable: true,
        configurable: true
    });
    AccountingDepartment.prototype.addReports = function (r) {
        this.reports.push(r);
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    AccountingDepartment.prototype.addEmployee = function (name) {
        if (name === "Max")
            return;
        this.employee.push(name);
    };
    return AccountingDepartment;
}(DepartMent));
var it = new itDepartment(45, ["hello"]);
var accountingDepartment = new AccountingDepartment(3, [
    "Everything looks okay"
]);
console.log(itDepartment.createEmployee("Max"));
accountingDepartment.addReports("Wifi is so slow");
accountingDepartment.printReports();
accountingDepartment.addEmployee("Max");
accountingDepartment.addEmployee("Prottay");
accountingDepartment.getEmployeeInformation();
//# sourceMappingURL=app.js.map