//Powerful array methods
//for each, Map, filter, find, reduce
//Iterate over array - no for loop required
//Accept callback function as an arguement, calls Callback against each item in array. Reference item in call back parameter.

const numbers = [0, 1, 2, 3, 4];

// show all numbers

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    
}


// for each
// does not return new array

const people = [
    {name: 'bob', age: 20, position: 'Developer'},
    {name: 'ben', age: 25, position: 'Designer'},
    {name: 'kate', age: 30, position: 'The Boss'}
];

function showPerson(person) {
    console.log(person.position.toUpperCase());
}

people.forEach(showPerson);


// Map (in time 6hr:18min)
// does return a new array
// does not change size of original array
// uses values from original array when making new ones

const humans = [
    {name: 'bob', age: 20, position: 'Developer'},
    {name: 'ben', age: 25, position: 'Designer'},
    {name: 'kate', age: 30, position: 'The Boss'}
];

const ages = humans.map(function(person) {
    console.log(person);
    return 'hello world'; // if you want to get the age do (return person.age;)
});
const newPeople = people.map(function (person){
    return {
        firstName: person.name.toUpperCase(),
        oldAge: person.age + 20,
    };
});

const names = people.map(function(person){
    return `<h1> ${person.name}</h1?>`;
});

document.body.innerHTML = names.join(''); ///DOM MANIPULATION
// console.log(ages);
// console.log(newPeople);
console.log(names);


//FIlter
//does return a new array
//can manipulate the size of new Array
//return based on condition

const species = [
    {name: 'bob', age: 20, position: 'Developer'},
    {name: 'ben', age: 25, position: 'Designer'},
    {name: 'kate', age: 30, position: 'The Boss'},
    {name: 'raymond', age: 36, position: 'The Boss regeant'}
];

const youngPeople = species.filter(function(person) {
    return person.age <= 25;   // this filters out 25 and under 25....
}); 

const developer = species.filter(function (persons) {
    return persons.position === 'Developer'; // this filters out the person with occupation of a developer
});

console.log(youngPeople); 
console.log(developer); 


// find
// returns single instance - (in this case object)
// returns first match, if no match undefined
// great for getting unique value...


const zombies = [
    {name: 'bob', age: 20, position: 'Developer', id: 1},
    {name: 'ben', age: 25, position: 'Designer', id: 2},
    {name: 'kate', age: 30, position: 'The Boss', id: 3},
    {name: 'raymond', age: 36, position: 'The Boss regeant', id: 4},
];

const personss = zombies.find(function (persona) {
    return persona.id ===  3;
});

console.log(personss);

// Reduce
// iterates, callback function
//reduces to a single value - number, array, object
//1 parameter ('acc') - total of all calculations
//2 parameter ('curr') - current iteration

const person2 = [
    {name: 'bob', age: 20, position: 'Developer', id: 1, salary: 200},
    {name: 'ben', age: 25, position: 'Designer', id: 2, salary: 300},
    {name: 'kate', age: 30, position: 'The Boss', id: 3, salary: 500},
    {name: 'raymond', age: 36, position: 'The Boss regeant', id: 4, salary: 500},
];

const total = person2.reduce(function (acc, currItem) {
    //console.log(acc);
    //console.log(currItem);

    console.log(`total ${acc}`);
    console.log(`current money : ${currItem.salary}`);

    acc += currItem.salary;
    return acc;
},0);

console.log(total);