// Global scope
//any variable outside the code block{} is said to be global scope
//it can be accessed anywhere in the program
//Gotchas : name collisions, modify by mistake

let name = 'ben';
name = 'peter';

function calculate() {
    // some other code....
    console.log(name);
    name = 'orange';
    function inner() {  // creating a function inside a function
        name = 'inner name value';
        console.log(`This is from inner function ${name}`);
    }
    inner();
}
calculate();

if (true) {
    console.log(name);
    name = 'orange'; 
}

console.log(`my name is ${name} and i'am awesome`);


// local scope
// can not be access from outside the code block
// if - NOT VAR

let name1 = 'ben';


function calculate() {
   const name = 'jeffery';
   const age = 25; // targeting the variable wont work because of const...
   becomesGlobal = 'global variable'; // targeting this will work because it doesnt have keyword const, let or var.
}
calculate();
console.log(becomesGlobal);

if (true) {
     
}

console.log(`my name is ${name} and i'am awesome`);