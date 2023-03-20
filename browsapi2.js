
// ChildNodes -  returns all child nodes including white spaces which is treated as a text node

//children
//firstchild
//lastchild

//Traversing the DOM using the childNodes and children..better one is using children

const result = document.querySelector('#result');
const allChildren = result.childNodes;
console.log(allChildren); // it counts even the white spaces

const children = result.children;
console.log(children);

console.log(result.firstChild);
console.log(result.lastChild);


//parent element

const heading = document.querySelector('h3');
//console.log(heading.parentElement);  //parentElement gives you the parent to the child
const parent = heading.parentElement;
parent.style.color = 'purple';


//previousSibling
//nextSiblings
//return whitespaces
// Time 7hrs:56min:22sec

const first = document.querySelector('.first');
const second = first.nextSibling.nextSibling.style.color = 'red';// run it twice because the first nextSibling value targets the whitespace
console.log(second);

const last = document.querySelector('#last');
const third = last.previousSibling.previousSibling;
console.log(third);


// previousElementSibling
//nextElementSibling

//const first = document.querySelector('.first');
// first.nextElementSibling.style.color = 'red';
