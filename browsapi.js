// window object = browser api
// document
// console.dir    time(7hr 22min)

//alert('hello people');
console.log(window);

console.log(document);



// Select the element or group of elements that we want
//Decide the effect we want to apply to the selection

//getElementById('element')

const h1 = document.getElementById('title');
h1.style.color = 'steelblue';

//const btn = document.getElementById('btn');
//document.getElementById('btn').style.backgroundColor = 'blue';

const btn = document.getElementById('btn'); // using a constant/variable in this case is easier in targetting them
btn.style.backgroundColor = 'blue';
btn.style.color = 'white';



//select the element or the group of elements that we want
//decide the effect that we want to apply to the selection

//getElementByTagName('tagname');
//node-list = array-like object
//index,length property but not arraymethod
// Time:  7h:30min

const headings = document.getElementsByTagName('h2');
headings[0].style.color = 'red';
console.log(headings.length);// shows how many headings{h2} are there

const items = document.getElementsByTagName('li');

//items.forEach(function(item){
    //console.log(item);
//});

items[2].style.color = 'orange'; // targets the index 2 and changes its color in the body
const betterItems = [...items]; // the elipses are spread operatores

betterItems.forEach(function(item){
    console.log(item);
});



// getElementByClassName('classname');
//node-list = array-like object
//index,length property but not array method
//Time 7hrs: 39min

const listItems = document.getElementsByClassName('specials');
listItems[1].style.color = 'blue';


// querySelector('anycss'); - selects single
//querySelectorAll('anycss'); - selects all

const result = document.querySelector('#result');
result.style.backgroundColor = 'gray';

const lastItem = document.querySelector('li:last-child');
console.log(lastItem);

const list = document.querySelectorAll('.specials'); 
console.log(list);

list.forEach(function(item){
    console.log(item);
    item.style.color = 'yellow'; // all specials will be yellow
});