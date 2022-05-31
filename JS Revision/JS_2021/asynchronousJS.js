//Asynchronous Nature of JS
//We have a creation phase and execution phase.

//👉Hoisting in Javascript
//Hoisting in Javascript is a mechanism where variables and functions
//declarations are moved to the top of their scope before the code execute.

// For Example 👇
// console.log(myName);
// let myName;
// myName = "thapa";

// // How it will be in output during creation phase 

// 1: var myName = undefined;
// 2: console.log(myName);
// 3: myName = "thapa";


// //😲 In ES2015 (a.k.a. ES6), hoisting is avoided by using the let keyword 
// // instead of var. (The other difference is that variables declared 
// // with let are local to the surrounding block, not the entire function.)


//👉Scope Chain and Lexical Scoping in JavaScript
//What is Scope Chain and Lexical Scoping in JavaScript? 

// // The scope chain is used to resolve the value of variable names 
// // in JS.

// // scope chain in js is lexically defined, which means that we can 
// // see what the scope chain will be by looking at the code. 

// // At the top, we have the Global Scope, which is the window Object
// // in the browser.

// // Lexical Scoping means Now, the inner function can get access to 
// // their parent functions variables But the vice-versa is not true.


// // For Example 👇
// Child can use parents variables but vice versa not true.Variables 
// of child may not be accessed by parent

// let a = "Hello guys. "; // global scope

// const first= () => {
//   let b = " How are you?"
 
//     const second = () => {
//       let c = " Hii, I am fine thank you🙏";
//       console.log(a+b+c);
//     }
//    second();
//     console.log(a+b+c); //I can't use C 
// }

// first();

//👉Closures in JavaScript
// // What is Closures in JavaScript 🤔

// // A closure is the combination of a function bundled together (enclosed) with references 
// // to its surrounding state (the lexical environment). 

// // In other words, a closure gives you 
// // access to an outer function’s scope from an inner function. 

// // In JavaScript, closures are created every time a function is created, at function creation time.

// // For Example 👇

// const outerFun = (a) => {
//     let b = 10;
//     const innerFun = () => {
//       let sum = a+b;
//       console.log(the sum of the two no is ${sum});//Here summation of variable andf param. of parent function parameter
//     }
//     innerFun();
// }
// outerFun(5);

// // it same like lexical scoping 

// // One more Example 👇

// const outerFun = (a) => {
//   let b = 10;
//   const innerFun = () => {
//     let sum = a+b;
//     console.log(the sum of the two no is ${sum});
//   }
//   return innerFun;
// }
// let checkClousure = outerFun(5);
// console.dir(checkClousure);

// "use strict"

// let x = "vinod";
// console.log(x);








//Synchronous and Asynchronous Nature of JS
//Synchronous JS-Implies operation to be run sequentially,irrespective computation time but
//incase of asynchronous JS Its not important for operations to run sequentially.After 
//AJAX Js became asynchronous For example


//Synchronous JS -Ek ek karke Operations perform honge
//Asynchronous JS-Sarre Operations ek saath honge side by side

// // 6️⃣:   Synchronous JavaScript Prog 

// 1 work = 10min
// 2 work = 5s
// Synchronous:Do work sequentially
// Asynchronous:Can do work in any order


// console.log("Synchronous JS")
// const fun2 = () => {
//   console.log(`Function 2️⃣ is called`);
// }

// const fun1 = () => {
//   console.log(`Function 1 is called`);
//   fun2();
//   console.log(`Function 1 is called Again ✌`);
// }

// fun1();
// console.log("*********************************")


console.log("Asynchronous JS")
// Asynchronous JavaScript Prog 

const fun2 = () => {
    
  setTimeout(()=> {
      console.log("Wait for 2 seconds");
      console.log(`Function 2️⃣  is called`);
  }, 2000);

}

const fun1 = () => {
  console.log(`Function 1 is called`);
  fun2();
  console.log(`Function 1 is called Again ✌`);
}

fun1();


// How JS asynchronous Works in backend 13:06:20 TT se start























