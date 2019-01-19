// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1,mmelloy0@psu.edu,Mitzi,F
// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery2@wikimedia.org,Keven,M
// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F

// Example format of an intern object: 1,examples@you.edu,Example,F
const example = {
  "id": 0,
  "name": "Example",
  "email": "examples@you.edu",
  "gender": "F"
};

// Write your intern objects here:

class person {
  
  constructor (name, id, email, gender, age = undefined) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.gender = gender;
    this.age = age;
  }
  
  speak() {
    return `Hello, my name is ${this.name}`;
  }
  
  static multiplyNums( a, b) {
    return a * b;
  }
}

const mitzi = new person("Mitzi", 1,"Mitzi@email.com", 'F' );
const kennan = new person("Kennan", 2,"Kennan@email.com", 'M' );
const keven = new person("Keven", 3,"Keven@email.com", 'M' );
const gannie = new person("Gannie", 4,"Gannie@email.com", 'F' );
const antonietta = new person("Antonietta", 5,"Antonietta@email.com", 'M' );
// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log(mitzi.name);

// Kennan's ID

console.log(kennan.id);

// Keven's email

console.log(keven.email);

// Gannie's name

console.log(gannie.name);

// Antonietta's Gender

console.log(antonietta.gender);

// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
console.log(kennan.speak());

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
console.log(person.multiplyNums(3,4));

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

class parent extends person {
  constructor  (name, age, child = undefined){
    super( name, undefined, undefined, "F", age );
    this.child = child;
  }
  
}

class child extends person {
  constructor  (name, age, grandcChild = undefined){
    super( name, undefined, undefined, "F", age );
    this.grandChild = grandcChild;
  }
}

class grandChild extends person {
  constructor  (name, age){
    super( name, undefined, undefined, "F", age );
  }
}

const susan = new parent('Susan', 70);
susan.child = new child('George', 50);
susan.child.grandChild = new grandChild ('Sam', 30);

// Log the parent object's name

console.log(susan.name);

// Log the child's age

console.log(susan.child.age);

// Log the name and age of the grandchild

console.log(susan.child.grandChild.name + " " + susan.child.grandChild.age);

// Have the parent speak

console.log(susan.speak());

// Have the child speak

console.log(susan.child.speak());

// Have the grandchild speak

console.log(susan.child.grandChild.speak());