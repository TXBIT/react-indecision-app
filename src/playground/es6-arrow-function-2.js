// arguments object - no longer bound with arrow functions

const add = function (a, b) {
  console.log(arguments);
  return a + b;
};
console.log(add(55, 1, 1001));

// const addArrow = (a, b) => {
//   console.log(arguments);
// };
// console.log(addArrow(55, 1));

// this keyword - no longer bound
const user = {
  name: 'Name001',
  cities: ['City001', 'City002', 'City003'],
  printPlacesLived: function () {
    const that = this;
    this.cities.forEach(function (city) {
      console.log(`${that.name} has lived in ${city}`);
    });
    // this.cities.forEach((city) =>
    //   console.log(`${this.name} has lived in ${city}`)
    // );
  },
  // printPlacesLivedArrow: () => {
  //   this.cities.forEach((city) =>
  //     console.log(`${this.name} has lived in ${city}`)
  //   );
  // },
  printPlacesLivedES6Syntax() {
    return this.cities.map((city) => `${this.name} has lived in ${city}`);
    // this.cities.forEach((city) =>
    //   console.log(`${this.name} has lived in ${city}`)
    // );
  },
};

// user.printPlacesLived();
console.log(user.printPlacesLivedES6Syntax());

// Challenge area
const multiplier = {
  // numbers - array of numbers
  numbers: [10, 20, 30],
  // multiplyBy- single number
  multiplyBy: 3,
  // multiply - return a new array where the number have been multiplied
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  },
};

console.log(multiplier.multiply());
