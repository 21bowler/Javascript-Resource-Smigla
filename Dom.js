// time 7hr 08min


// similar to css
// Select the element or group of elements you want to affect
//Decide the effect we want to apply to the selection

// many different ways 

document.body.style.backgroundColor = 'blue';
document.body.style.color = 'yellow';
document.getElementById('btn').style.color = 'red';

//assign to a variable (time : 7hr 14min)

const element = document.getElementById('element');

// do sommething

document.querySelector('element'); //do something

// window object
console.log(window);

// returns a node object or a node list, which is an array like object

const btn = document.getElementById('btn');
const name = btn.nodeName;
const css = btn.style;

console.log(btn);
console.log(name);
console.log(css);