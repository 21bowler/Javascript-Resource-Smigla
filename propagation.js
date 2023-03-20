//allows selecting dynamic elements
//event propagation - order the events are fired
//event bubbling - clicked element first when bubbles up -- default
// event capturing - fires at the root and fires until reaches target.
// time 9hrs 40min
// repeat this one 
const container = document.querySelector('.container');
const list = document.querySelector('.list-items');

function showBubbling (e){
    console.log('current target',e.currentTarget);
    console.log('target',e.Target);
}

function stopPropagation (e){
  //e.stopPropagation();
  console.log('You clicked on the list');
}

list.addEventListener('click',stopPropagation);
list.addEventListener('click',showBubbling);
container.addEventListener('click',showBubbling);

