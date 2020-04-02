class DepartMent {
  static data: string = "name";
  protected employee: string[] = [];
  constructor(private readonly name: string, public id: number) {
    console.log(DepartMent.data);
  }
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
  static createEmployee(name: string) {
    return { name };
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
  get getRecentReport() {
    if (!this.reports) {
      throw new Error("No last report found");
    }
    return this.reports;
  }
  addReports(r: string) {
    this.reports.push(r);
  }
  printReports() {
    console.log(this.reports);
  }
  addEmployee(name: string) {
    if (name === "Max") return;
    this.employee.push(name);
  }
}
const it = new itDepartment(45, ["hello"]);
const accountingDepartment = new AccountingDepartment(3, [
  "Everything looks okay"
]);

console.log(itDepartment.createEmployee("Max"));
accountingDepartment.addReports("Wifi is so slow");
accountingDepartment.printReports();
accountingDepartment.addEmployee("Max");
accountingDepartment.addEmployee("Prottay");
accountingDepartment.getEmployeeInformation();
