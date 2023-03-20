// Date 
// you can get the current date or set it yourself
// time 6hr : 58min


const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Sartuday',
];




const date = new Date();
const month = date.getMonth();
console.log(months[month]);// this displays the current month

const day = date.getDay();
console.log(days[day]);//this displays the currentday

console.log(date.getDate()); // this displays out the date
console.log(date.getFullYear()); // this displays out the year

const sentence = `${days[day]}, ${date.getDate()} ${months[month]} ${date.getFullYear()}`;

console.log(sentence); //this displays it in the console...

document.body.innerHTML = sentence; // this displays it in the body of the browser