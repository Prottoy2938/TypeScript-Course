class DepartMent {
  private employee: string[] = [];
  constructor(private name: string, public id: number) {}
  describe(this: DepartMent, age: number) {
    console.log("department is ", this.name, ". Age is ", age);
  }
  addEmployee(name: string): void {
    this.employee.push(name);
  }
  getEmployeeInformation(): void {
    console.log(this.employee.length);
    console.log(this.employee);
  }
}

const myClass = new DepartMent("Science", 45);
myClass.addEmployee("Prottay");
myClass.addEmployee("Rudra");
myClass.getEmployeeInformation();
