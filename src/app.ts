abstract class DepartMent {
  static data: string = "name";
  protected employee: string[] = [];
  constructor(protected readonly name: string, private id: number) {
    console.log(DepartMent.data);
  }
  abstract describe(this: DepartMent): void;
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
    super("IT", id);
  }
  describe() {
    console.log("Department is", this.name);
  }
}

class AccountingDepartment extends DepartMent {
  private constructor(id: number, private reports: string[]) {
    super("Accounting", id);
  }
  private static instance: AccountingDepartment;
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
  describe() {
    console.log("Department is", this.name);
  }
  static getInstance() {
    if (AccountingDepartment.instance) {
      return AccountingDepartment.instance;
    } else {
      AccountingDepartment.instance = new AccountingDepartment(21, []);
      return AccountingDepartment.instance;
    }
  }
}

const it = new itDepartment(45, ["hello"]);
const accountingDepartment = AccountingDepartment.getInstance();
accountingDepartment.addReports("Hi there");
const accountingDepartment1 = AccountingDepartment.getInstance();
console.log(accountingDepartment);
console.log(accountingDepartment1);
