// Setup constructor to take name and age (default to 0)
// getDescription - Name id Age year(s) olds.

class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi. I am ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

const me = new Person('My Name');
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());
