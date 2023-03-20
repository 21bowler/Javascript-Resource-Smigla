//String properties and methods(should be invoked)
// methods and strings are zero indexed based

let text = 'Peters Jordan';
let result =  text.length; // this is a string... 

console.log(result);
console.log(text.toLocaleLowerCase()); // this is a method and should be invoked
console.log(text.toLocaleUpperCase());
console.log(text.charAt(4)); // the charAt gives out the letter by its index
console.log(text.trim());
console.log(text.indexOf('r')); // indexOf tells exactly where the letter is..
console.log(text.startsWith('Peters')); // spits out a TRUE or FALSE value in the console
console.log(text.includes('eter'));
console.log(text.slice(0, 2)); 
console.log(text.slice(-4)); // gives the number in backwards.. 


// Template literals - ES6
//Backticks characters `` - above tab (left from one)
//interpolation ${} - insert expression(value)

const name = 'john';
const age = 25;
const sentence = "Hey its "  + name + ' and he is ' + age + ' years old';

const value = `Hey it's ${name} and he is ${age} years old. Also here is some math ${4*4}`; // using backticks example...
console.log(value);
console.log(sentence);


//Arrays Properties and Methods

let names = ['john','aurora','barry','iris', 'zoom', 'barbra'];

   // length
console.log(names.length);
console.log(names[4]);
console.log(names.length-1);
console.log(names[names.length - 1]);

   // concat
const lastNames = ['pepper', 'maccoy', 'hicks'];
const allNames = names.concat(lastNames);
console.log(allNames);

  // reverse 
console.log(allNames.reverse());// methods should be invoked....

  // unshift adds a name at the beginning
allNames.unshift('susy');
console.log(allNames);

  //shift removes the name in the beginnng
allNames.shift();
console.log(allNames);

  //push adds items at the end of the array..
allNames.push('susy');
console.log(allNames);

  //pop deletes items at the end of the array
allNames.pop();
allNames.pop();
console.log(allNames);

  // splice - mutates original array or say it pulls out the names
const specificNames = allNames.splice(0, 2);
console.log(specificNames)

