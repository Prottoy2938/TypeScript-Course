class DepartMent {
  private employee: string[] = [];
  constructor(private name: string, public id: number) {}
  describe(this: DepartMent) {
    console.log("department is ", this.name);
  }
  addEmployee(name: string): void {
    this.employee.push(name);
  }
  getEmployeeInformation(): void {
    console.log(this.employee.length);
    console.log(this.employee);
  }
}

class itDepartment extends DepartMent {
  constructor(id: number, public admins: string[]) {
    super("it", id);
  }
}

class AccountingDepartment extends DepartMent {
  constructor(id: number, private reports: string[]) {
    super("Accounting", id);
  }
  addReports(r: string) {
    this.reports.push(r);
  }
  printReports() {
    console.log(this.reports);
  }
}
const it = new itDepartment(45, ["hello"]);
const accountingDepartment = new AccountingDepartment(3, [
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
