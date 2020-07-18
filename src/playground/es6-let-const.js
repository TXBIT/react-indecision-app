var nameVar = 'nameVar1';
var nameVar = 'nameVar2';
console.log(`nameVar ${nameVar}`);

let nameLet = 'nameLet1';
nameLet = 'nameLet2';
console.log(`nameLet ${nameLet}`);

const nameConst = 'nameConst1';
console.log(`nameConst ${nameConst}`);

// var, let, const variables are functions scoped
function getPetName() {
  var petNameVar = 'petNameVar';
  let petNameLet = 'petNameLet';
  const petNameConst = 'petNameConst';
  return petNameVar;
}

const petName = getPetName();
console.log(petName);

// let and const variables are block level scoped
// Block scoping
var fullNameVar = 'Full Name Var';
const fullNameConst = 'Full Name Const';
let firstNameLet;
if (fullNameConst) {
  var firstNameVar = fullNameConst.split(' ')[0];
  // let firstNameLet = fullNameConst.split(' ')[0];
  firstNameLet = fullNameConst.split(' ')[0];
  const firstNameConst = fullNameConst.split(' ')[0];
  console.log(firstNameLet);
}

console.log(firstNameLet);
