

// declaring and invoking functions...

function hello() {
    //logic is written here
    console.log('hello there susan');
    console.log('hello there bob');
    console.log('hello there anna');
}
// this is invoking or calling the function....
hello();

//another method instead of writting so many function this reduces redundancy..
function greet(name){
    //logic is writtern here
    console.log('hello there:' + name);
}

//calling the function
greet('bob');
//greet anna
greet('anna');
//greet susy
greet('susy');

//calculations
//1 inch = 2.54cm

function calculate(value){
    console.log('the value in cm is:' + value * 2.54 + 'cm');
    return 'Sam says'; //you can return a function or not{it can be a string,object,number etc}
}

const width = calculate(100);
const height = calculate(250);

const dimensions = [width,height];
console.log(dimensions);

//Function expression
const firstValue = addValue(3,4);
const secondValue = addValue(12,34);

function addValue(num1,num2){
    return num1 + num2;
}

//Javascript objects

const person = {
    name: 'John',     // this is a property
    lastName:'peters',
    age: 40,
    education: false, //objects must be separated using a comma just like arrays...
    married: true,
    siblings: ['anna','joseph','mary'],
    greeting: function (){
        console.log('Hello my name is JOHN!!!');
    },
};
console.log(person.name); // using the dot notation...
console.log(person.siblings[1]); //use the dot notation to target and display the name.
person.greeting();// invoking the greeting

// condition statement

if(true){
    console.log('Hello world here i am!!!!');
}

//for TRUE
const value = 2 > 1;
if(value){
    console.log('Hello javis');
}

//If else statement
const number = 1 > 3;// this is false....
if(number){
    console.log('Hello javis');
}
else{
    console.log('hello Hulk');
}

//another example of if else
const num1 = 4;
const num2 = 6;

if(num1 > num2){
    console.log('The first number is bigger than second');
}else{
    console.log('The second number is bigger than first');
} 

// Not value

const not = false;

if(!not){
    console.log('Display the value');
}

// Equality operator 

const numA = 5;
const numB = 5;

const answer = numA == numB;
const answer2 = numA === numB;
console.log(answer);
console.log(answer2);

//switch statement
//dice values : 1-6
const dice = 4;

switch (dice) {
    case 1:
        console.log('you got one');
        break;
    case 2:
        console.log('you got two');
        break;
    case 3:
        console.log('you got three');
    default:
        console.log('you did not roll the dice');
}

// while loop

let amounts = 10;

while (amounts > 0) {
    console.log('I have ' + amounts + "  dollars and i am going to the mall");
    amounts--;
}

// do while loops
//code block first, condition second

let money = 0;

do{
    console.log('You have ' + money + ' dollars');
    money++;
} while (money < 10);

// for loops

let i;
for (i = 0; i < 10; i++) {
    console.log('and the number is : ' + i);
}

// another example of for loop

for(let number = 11; number >= 0; number--) {
    console.log('The numbers are : ' + number);
}

