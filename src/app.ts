class DepartMent {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
  describe(this: DepartMent, age: number) {
    console.log("department is ", this.name, ". Age is ", age);
  }
}
const accounting = new DepartMent("accounting");
console.log(accounting.describe(4));

const accountingCopy = { describe: accounting.describe };
const accountingCopy1 = { name: "physics", describe: accounting.describe };

//now `accountingCopy` does not have a object structure like Department
console.log(accountingCopy.describe(22));

//now `accountingCopy1` would have to have a object structure like Department
console.log(accountingCopy1.describe(22));
