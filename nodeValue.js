//nodeValue
//textContent

const item = document.getElementById('content');
const value = item.firstChild.nodeValue;
//console.log(item.childNodes[0].nodeValue);
const easyValue = item.textContent;

console.log(easyValue);

//2 methods
//getAttribute()
//setAttribute()
//time 8hr:5min:24sec

const first = document.querySelector('.first');
const classValue = first.getAttribute('class'); //gets the class name for it
console.log(classValue);// prints it out..

const idValue = first.getAttribute('id');
//console.log(idValue);

const link = document.getElementById('link');
const showLink = link.getAttribute('href');
console.log('showLink');

//className - tells the className..
//classList

const kwanza = document.getElementById('kwanza');
const pili = document.getElementById('pili');
const tatu = document.getElementById('tatu');

const classValue2 = kwanza.className;
console.log(classValue2); 
pili.className = 'colors';
tatu.classList.add('colors'); //this adds the classList
tatu.classList.remove('colors'); //this removes the classList
let result = tatu.classList.contains('colors');
if(result){
    console.log('hello worldies');
}else{
    console.log('does not have the class');
}

//createElement('element)
//createTextNode('text content)
//element.appendchild(childElement)

//insertBefore('element','location');      time 8hr 30min 45sec
//replaceChild('new','old');

const result4 = document.querySelector('#result4');

//create an empty element

const bodyDiv = document.createElement('div');
//create textNode
const text = document.createTextNode('a simple body div');
bodyDiv.appendChild(text);
document.body.appendChild(bodyDiv);

const heading = document.createElement('h2');
const headingText = document.createTextNode('dynamic heading');
heading.appendChild(headingText);
heading.classList.add('blue');

//appending child
result4.appendChild(heading);

//
const smallHeading = document.createElement('h6');
const smallText = document.createTextNode(`i am small heading text`);
smallHeading.classList.add('red');
smallHeading.appendChild(smallText);
document.body.replaceChild(smallHeading, bodyDiv);  