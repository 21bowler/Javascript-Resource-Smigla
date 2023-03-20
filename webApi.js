// time 10hrs 4min
//Web Storage API - provided by the browser
//session storage, local storage 
//setItem,getItem,removeItem, Clear

// localStorage.setItem('name', 'john');
// sessionStorage.setItem('name', 'john');

localStorage.setItem('name', 'john');//Saving items in localStorage
localStorage.setItem('friend', 'peter');//Saving items in localStorage
localStorage.setItem('job', 'developer');//Saving items in localStorage
localStorage.setItem('address', 'street 123');//Saving items in localStorage

const name = localStorage.getItem('name'); // accessing items in  local storage 
console.log(name);
localStorage.removeItem('name');// Removes items in the localstorage

localStorage.clear();// deletes all items in the localstorage

// JSON.stringify(),JSON.parse()

const friends = ['john','peter', 'bob'];

localStorage.setItem('friends',JSON.stringify(friends));

const values = JSON.parse(localStorage.getItem('friends'));
console.log(values[2]);

let fruits;

if(localStorage.getItem('fruits')){
    fruits=JSON.parse(localStorage.getItem('fruits'));
}else{
    fruits = [];
}

console.log(fruits);
fruits.push('apple');
localStorage.setItem('fruits',JSON.stringify(fruits));