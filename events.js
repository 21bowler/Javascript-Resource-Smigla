// Event listners  time 8hrs 59min

//select element
//addEventListeners()
//what event? what to do?

//const btn = document.querySelector('.btn2');
//const heading = document.querySelector('h2');

/*****btn.addEventListener('click', function(){  // this is the callback function after it is clicked
    heading.classList.add('red'); //this tells it when you click it heading gets the property
    //console.log('you clicked me');
});******/



//referencing callback functions
/*
const btn = document.querySelector('.btn2');
const heading = document.querySelector('h2');
*/

/*
function changeColors() {
    //checking if the class list does or doesnt have content
    let hasClass = heading.classList.contains('red');
    if(hasClass){
        heading.classList.remove('red');
    }else{
        heading.classList.add('red');
    }
};
*/

//btn.addEventListener('click', changeColors); //this is where it has been referenced


// click - fires after full action occurs
//mousedown - button is pressed
//mouseup - button is released
//mouseenter - moved onto an element
//mouseleave - moved out of an element

const heading = document.querySelector('h2');
const btn = document.querySelector('.btn2');

btn.addEventListener('click', function(){
    console.log('you clicked me');
});
btn.addEventListener('mousedown', function(){
    console.log('down');
});
btn.addEventListener('mouseup', function(){
    console.log('Up');
});

heading.addEventListener('mouseenter', function(){
    heading.classList.add('blue');
});

heading.addEventListener('mouseleave', function(){
    heading.classList.remove('blue');
});
