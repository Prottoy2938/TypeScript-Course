class DepartMent {
  name: string;
  private employee: string[] = [];
  constructor(n: string) {
    this.name = n;
  }
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

const myClass = new DepartMent("Science");

myClass.addEmployee("Prottay");
myClass.addEmployee("Rudra");
//can't edit/modify `employee` outside of the class due to `private` keyword.
//So we used a function which lives inside the object and modifies the `employee` array from there.
myClass.employee[2] = "Arafat";
myClass.getEmployeeInformation();
