// 1. Currying is a technique of evaluating function with multiple arguments,]
// into sequence of function with single argument.

// 2.In other words, when a function, instead of taking all arguments at one time,
// takes the first one and return a new function 

// 3.Then takes the second one and returns a new function which takes the third one,
// and so forth, until all arguments have been fulfilled.

// 4.That is, when we turn a function call add(1,2,3) into add(1)(2)(3) .
//  By using this technique, the little piece 

//Long Form
// function sum(num1){
//     return function(num2){
//         return function(num3){
//             console.log(num1+num2+num3)
//         }
//     }
// }

//Short Form

const sum=(num1)=>(num2)=>(num3)=>console.log(num1+num2+num3)
sum(5)(3)(8);


