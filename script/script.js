console.log("Hi, JS Student!");
console.log("Hi, JS Student1!")
console.log("Hi, JS Student2!");
console.log("Hi, JS Student3!");

let numberType = 10;
let floatNumber = 10.57;
let stringType = "Text";
let stringTypeAnother = 'another "text"';
let stringType2 = "text with \t continue";
console. log(stringType2); 
let lightIsOn = true;
let d; //undefined 
let nothing = null;
let car = {
    "first": "bmw",
    "second": "lada",
    "third": "wv"
};
let person = {
    "age": 20,
    "name": "Max",
    "streetName": "Oxford"
};
const INCOME = [1000, 4500, 3000, 7654]
INCOME.push(1987);
console.log(INCOME);

let newName = "Oksana";
let surname = "Melnikova";
let fullName = newName + " " + surname;
console.log(`This is my fullname ${fullName} \u26C4.`)

let nameLength = newName.length;
let index = 5;
console.log(`The symbol for ${index} position is ${newName.charAt(index)}`);
console.log(`Lenght of the name is ${nameLength}`);

console.log(fullName.toUpperCase())

console.log(newName < surname);

let myLuckyNumber = 16;
let floatNumber2 = 12.45678;

//экранное время
let whatsapp = 50
let fb = 25
let inst = 90
let spotify = 130

let total = whatsapp + fb + inst + spotify

console.log(total);
let averageTime = total / 4;
console.log(total/4);

console.log(typeof total);
console.log(typeof averageTime);

console.log(Math.ceil(averageTime));
console.log(Math.floor(averageTime));
console.log(Math.trunc(averageTime));
console.log(Math.round(averageTime));
