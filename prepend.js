//prepend
//innerText

const Heading = document.createElement('h2');
Heading.innerText = `i am a dynamic heading`;
document.body.prepend(Heading);


//remove  remove()
//removeChild 

const result4 = document.querySelector('#result4');
//result4.remove(); // it removes the an element

//second is removing child            time 8hrs 41min
const heading = result4.querySelector('h1'); //this is selecting the element to remove
result4.removeChild(heading); //call the method
console.log(heading);// shows if we are targetting the correct element


//innerHTML -> this shows that it is on the selected id or class
//textContent -> this shows the content thats inside the tags   time 8hr 44min

const list = document.getElementById('firsts');
const div = document.getElementById('seconds');
const item = document.querySelector('.item');

console.log(div.textContent);
console.log(list.innerHTML);
console.log(list.textContent);

//creating a new element
const ul = document.createElement('ul');
ul.innerHTML = `  <li class="item">list item</li>
<li>list item</li> <li>Big list item</li>`;
document.body.appendChild(ul);

//CSS    time 8hr 53min 25sec

const random = document.querySelector('.random');
// ->this is too much work instead use method down below

//random.style.backgroundColor = 'blue';
//random.style.color = 'white';
//random.style.fontSize = '3rem';
//random.style.textTransform = 'capitalize';

//this is the method to use
random.classList.add('title'); // this is the best way to style by adding the class that contauns the styles

