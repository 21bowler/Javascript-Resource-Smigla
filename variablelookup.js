// Variable lookup
// {} - code block
// local variale is given first priority than the global variable


const globalNumber = 5; // when the local variable isnt there its given the first priority

function add(num1, num2) {
    const globalNumber = 20; // this local variable is given first priority..
    const result = num1 + num2 + globalNumber;
    return result;
}

console.log(add(3, 4));



//callback Functions, Higher Order Functions, Fuctions as First Class Objects/citizens.
//Functions as first class Objects - stored in a variable (expressions) passed as an arguement to another function, return from the function(closure)
//Higher Order functions - accepts another function as an arguement or returns another function as a result.
//Callback Functions - passed to another function as an arguement and executed inside that function.


function greetMorning(name) {
    const myName = 'John';
    console.log(`Good morning ${name} , my name is ${myName}`);
}

greetMorning('Ben');