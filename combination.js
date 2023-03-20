// combination of arrays and for loops

const names = ['anna','susy','bob','jane',];
const lastName = 'shakeandbake';
let newArray = [];

//for loops
for(let i = 0; i <= names.length; i++) {
    console.log(i);
    console.log(names[i]);

    newArray.push(`${names[i]} ${lastName}`);
}

console.log(names);
console.log(newArray);

// Function, return, if, arrays, for loop.

const gas = [20, 40, 100, 30];
const food = [10, 40, 60];

function calculateTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

calculateTotal(food);

// Another example uing objects...
const fruit = [20, 40, 100, 30];
const vegetable = [10, 40, 60];

function calculateTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

const fruitTotal = calculateTotal(fruit);
const vegetableTotal = calculateTotal(vegetable);
const randomTotal = calculateTotal([200, 4000, 600, 1]);

console.log({    // using of object to display the amounts...
    fruit: fruitTotal,
    vegetable: vegetableTotal,
    random: randomTotal,
});

// using if inside a function

const guacamole = [20, 40, 100, 30];
const banana = [10, 40, 60];

function calculateTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    if (total > 100) {
        console.log(`whoa! you are spending way too much`);
        return total;
    }
    console.log(`You are good total is less than 100`);

    return total;
}

const guacamoleTotal = calculateTotal(guacamole);
const bananaTotal = calculateTotal(banana);
const anotherTotal = calculateTotal([200, 4000, 600, 1]);

