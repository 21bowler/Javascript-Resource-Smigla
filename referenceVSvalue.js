// reference vs value 

const number = 1;
const number2 = number;
console.log(`The first value is ${number}`);
console.log(`The first value is ${number2}`);

let person = {name:'bob'};
let person2 = person;

person2.name = 'susy';
console.log(`The name of the first person is ${person.name}`);
console.log(`The name of the first person is ${person2.name}`); 

//null and undefined
//undefiined - 'javascript cannot find a value for this'
//null - "developer sets the value"

     // for null
let number3 = 20 + null; // 20 + 0
console.log(number3);

     // for undefined
let number4 = 20 + undefined; // 20 + 0
console.log(number4);


// Truthy and Falsy
//"",'',0 .-0,NaN, false, Null, Undefined

const bool1 = true;
const bool2 = 2 > 1;

if (true) {
    console.log(`Hey it works!`);
}
if (2 > 1) {
    console.log(`Hey it also works!`);
}


// unary operator - typeof
let text = 'some text';
console.log(typeof text); //operand
// binary operator - assignment
let number5 = 3;
let number6 = 2 + 5; 

// ternary operator 
// formula for ternary {condition ? (runs if true) : (runs if false)}

const value = 1 < 0;

value ? console.log('value is true') : console.log('value is false');
