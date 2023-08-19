// VARIABLES //

var a, b, c
var a1 = 1;
let b1 = function (x) { return 1; };
const c1 = "warning";

console.log(a1);
console.log(b1);
console.log(c1);


// console.log(a1);
// console.log(b1);


// function addition(x)

// convert text case to upper case
// toUpperCases()

// function printf()

let intro = "Hello";

console.log(intro);

// JSON.parse();

// let textarea = document.getElementById("test-target"),
//   consoleLog = document.getElementById("console-log"),
//   btnReset = document.getElementById("btn-reset");

// function logMessage(message) {
//   consoleLog.innerHTML += `${message}<br>`;
// }

// textarea.addEventListener("keydown", (e) => {
//   if (!e.repeat) {
//     logMessage(`Key "${e.key}" pressed [event: keydown]`);
//   } else {
//     logMessage(`Key "${e.key}" repeating [event: keydown]`);
//   }
// });

// textarea.addEventListener("beforeinput", (e) => {
//   logMessage(`Key "${e.data}" about to be input [event: beforeinput]`);
// });

// textarea.addEventListener("input", (e) => {
//   logMessage(`Key "${e.data}" input [event: input]`);
// });

// textarea.addEventListener("keyup", (e) => {
//   logMessage(`Key "${e.key}" released [event: keyup]`);
// });

// btnReset.addEventListener("click", (e) => {
//   let child = consoleLog.firstChild;
//   while (child) {
//     consoleLog.removeChild(child);
//     child = consoleLog.firstChild;
//   }
//   textarea.value = "";
// });

// insert local storage object
// const cat = localStorage.setItem("myCat", "Tom");

// read local storage item
// const grab = localStorage.getItem("myCat");

// remove local storage item
// const rmv = localStorage.removeItem("myCat");

// clear local storage item
// const clr = localstorage.clear();

// create object
const person = {
  firstName: "Vince",
  lastName: "Sullivan",
  id: 1023,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};

let name2 = person.fullName();
console.log(name2);

// display data from object
document.getElementById("demo").innerHTML = person.fullName();

// object 2
// const bro = {
//   firstName: "guy",
//   lastName: "doe",
//   add: function () {
//     return this.firstName;
//   }
// };

// function product(name, price) {
//   this.name = name;
//   this.name = price;
// }

// function action(name, action) {
//   product.call(this, name, price);
//   this.messege = action;
// }

// console.log(new action('pizza', 4).name);

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

console.log(new Food('cheese', 5).name);
// Expected output: "cheese"


// function sum(x, y) {
//   return x + y;
// }

// let ans = sum(3, 4);

// function sub(a, b) {
//   return a - b;
// }

// let ten = sub(3, 4);

// let ten = 390420;


// console.log(typeof (ans));

// returns object as string
// toString()

// hello = function () {
//   return "Hello World!";
// }

// let checker = typeof (hello);

// console.log(checker);

// let talking = console.log(hello);




// console.log(typeof (talking));

// ARROW FUNTION
// let myfunction = (x, y) => x * 3;

let test = function (x) {
  let chk = typeof (x)
  return chk;
}


// console.log(test());

// let byte = buffer.bytelength;

// console.log(byte);

console.log(typeof ("hello"));

let arr = [];

// arr.add(2);



// console.log(array);

//compare an object with constructor property to confirm type
function isArray(myarray) {
  return myarray.constructor.toString().indexof("Array") > 1;
}

let d = new Date();

d.toDateString();
// console.log(d);


// this, call(), bind()