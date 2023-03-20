// time 9hrs 22min

//event object arguement e,evt
//info about triggered event
//event.type
//event.currentTarget
//this keyword
//preventDefault() - prevents default behaviour

const heading = document.querySelector('h4');
const btn3 = document.querySelector('.btn3');
const link2 = document.getElementById('link');
heading.addEventListener('click', function(){
    heading.classList.add('blue');
});

heading.addEventListener('click', function(event){
    console.log(event.currentTarget);
});

btn3.addEventListener('click', function(event){
   //console.log(event.currentTarget);
   event.currentTarget.classList.add('blue');
   console.log(event.type); // it returns the name of the event which is click
});

function someFunc(e) {
 e.preventDefault()   
};

link2.addEventListener('click',someFunc);


//currentTarget - always refers to the element to which the event handler has been attached to
//target - identifies the element on which the event occured

const btns = document.querySelectorAll('.btn-1');

btns.forEach(function(btn){
btn.addEventListener('click',function(e){
  //console.log(e.currentTarget);   //these are for currentTarget 
  //e.currentTarget.style.color = 'green'; //these are for currentTarget 
  console.log('target',e.target);
  e.target.style.color = 'green';
});
});