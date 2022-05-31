
/*To Run File in VS Code 
1)Click Terminal ,New Terminal
2)Select cmd
3)Navigate to folder where index.js is stored using cd
4)check node version using node -v
5)To run program use node fileName.js,Press enter
6)Shortcut to open terminal is (ctrl + ~)
*/
console.log("*************Values and variables in Javascript**************")
console.log("Hello World");
/*** Section 1 Values and variables in Javascript  ***/
var myName="Mayank Kumar Singh";
console.log(myName);
console.log();
/*** Section 2 Datatypes in Javascript  ***/
console.log();
console.log("*************Datatypes in Javascript**************")
// 1. undefined
// 2. Boolean
// 3. Number
// 4. String
// 5. Bigint(ES6)
// 6. Symbol(ES6)

myNumber=6394231818
myClass=false
myNationality=true
console.log(typeof(myName)+" "+typeof(myNumber)+" "+typeof(myClas)+" "+typeof(myNationality) );

console.log();
console.log("*************1. TASKS IN JS**************")
//TASK :
// 10+"20"
// 9-"5"
// "Java"+"Script"
// " "+" "
// " "+0
// "Mayank"-"Negativity"
// true+true
// true+false
// false+true
// false-true
console.log(10+"20")                            //Concat operation
console.log(9-"5")                              // Gives 4 No explanation as its a Bug of JS
console.log("Java"+"Script")                    //Concat operation
console.log(" "+" ")                            //Concat operation
console.log(" "+0)                              //Concat operation
console.log("Mayank"-"Negativity")              //NAN Error:"NOT A NUMBER ERROR".Can be used in Form Phone Number Validation if PhNo!=NaN Not Allowed
console.log(true+true)                          //In JS 1=true hence 1+1=2
console.log(true+false)                         //1+0=1
console.log(false+true)                         //0+1=1
console.log(false-true)                         //0-1=-1

console.log();
// Interview Question 1
// Difference between NULL and UNDEFINED
console.log("*************NULL VS UNDEFINED**************")
var iAmUseLess=null; //NULL basically means kuch bhi nhi Ghanta Khali hi bilkull.Basically ek ghar bna hi but koi nhi rehta usme so that house is useless similarly this variable is assigned null hence useless
console.log(iAmUseLess)  
console.log(typeof(iAmUseLess)) //Bug 2 of Javascript NULL means nothing/empty/vacant but still JS returns it as OBJECT datatype which is wrong hence its a bug of JS

var iAmStandBy;      //Its value is undefined and hence its a standby variable which can be used later if required.Just like Cricket it has 11 members but team is of 15 then 4 are in standby incase of injuries
console.log(iAmStandBy) 
console.log(typeof(iAmStandBy)) //Since value is undefined so datatype returned by function is undefined


// Interview Question 2
// What is NaN
// NaN is a property of the global Object(This will be covered when we study DOM vs BOM) )
// In other words,it is a variable in global Scope
// The initial value of NaN is Not-A-Number
console.log();
var myPhoneNum=6394231818;
var myNamee="Mayank Kumar";

//Function isNaN(argument) --Gives true if anything other than number is given as input.If Number is given as input then it returns false
console.log(isNaN(myPhoneNum)); //Since Ph NO so NAN gives false
console.log();
console.log(isNaN(myNamee));    //Anything other than Number gives true


console.log();
console.log();
// Interview Question 3
// 1. NaN===NaN;
// 2. Number.NaN === NaN;
// 3. isNaN(NaN);
// 4. isNaN(Number.NaN);
// 5. Number.isNaN(NaN);
console.log(NaN===NaN);                   //F
console.log(Number.NaN === NaN);          //F
console.log(isNaN(NaN));                  //T
console.log(isNaN(Number.NaN));           //T         Number.NaN ->NOT A NUMBER and isNaN(NOT A NUMBER)=T
console.log(Number.isNaN(NaN));           //T


/*** Section 3 EXPRESSIONS AND OPERATORS in Javascript  ***/
console.log("*************EXPRESSIONS AND OPERATORS**************")
// EXPRESSIONS AND OPERATORS
// 1.Assignment OPERATORS
// 2.Arithmetic OPERATORS
// 3.Comparison OPERATORS
// 4.Logical OPERATORS
// 5.String OPERATORS
// 6.Conditional(Ternary) OPERATORS

// 1.Assignment OPERATORS
var assignValue="Value"//= is assignment operator

//  2.Arithmetic OPERATORS
var a=8;
var c=2;
console.log();       
console.log(a+c," ",a-c," ",a/c,"    ",a*c," ",a**c," ",a%c," ",a++," ",c--);
//Prefix operator means first the variable is UPDATED then used in the expression
//Postfix first value gets used in the expression then UPDATED (inc or dec)
 
//  3.Comparison OPERATORS
console.log();       
console.log(a==c," ",a>c," ",a<c,"    ",a>=c," ",a<=c," ",a!=c," ");

//  4.Logical OPERATORS
console.log();   
//AND-Logical Conjunction
console.log(a!=c && a>c);
//OR-Logical Disjunction
console.log(a==c && a<c);
//NOT
console.log(!(a==c && a<c));


//  5.String OPERATORS
// The concat operator(+) concats two strings values togeather,returning another string that
//  is the union of two operand string
console.log("Mayank "+"Kumar "+"Singh");


//TASKS 2
console.log("*************1. TASKS IN JS**************")
console.log(3**3)
console.log(1+"Mayank")

var no1=12
var no2=13
var temp
console.log("Previous Value "+"num 1 = "+no1+" "+"num 2 = "+no2)
temp=no1;
no1=no2;
no2=temp;
console.log("New Value "+"num 1 = "+no1+" "+"num 2 = "+no2)

var no3=10;
var no4=20;
console.log("Previous Value "+"num 1 = "+no3+" "+"num 2 = "+no4)
no3=no3+no4
no4=no3-no4
no3=no3-no4
console.log("New Value "+"num 1 = "+no3+" "+"num 2 = "+no4)

// Interview Question 4
// Difference between == and ===
        //   ==    Compares only Values and not Datatype
        //   ===   Compares Both values as well as datatype
        
        console.log();   
        var d=5;
        var e="5"
        var f=d==e;                    //true because it checks only value not the datatype
        var g=d===e;                   //false because it checks both value and datatype
        console.log(f," ",g);

/*** Section 4 Control Statements and Loops in Javascript  ***/   
// 1. If..Else
// 2. Switch Statement;
// 3. While Loop
// 4. Do While Loop
// 5. For Loop
// 6. For in Loop
// 7. For of Loop
// 8. Conditional(ternary)operator     

// 1. If Else
//IF-ELSE
if(a>c)
{
    console.log("Greater");
}
else if(a==c)
{
    console.log("Equals");
}
else
{
    console.log("None of Above");
}

// 2. Swconsole.log
var d="11";
switch(d)
{
    case "10":console.log("Case 10 String");
    break;
    case "11":console.log("Case 11 String");
    break;
    default:
        console.log("None of above cases are true");
}

// 3. While Loop
k=1
while(k<=5)
        {
            console.log("Mayank \n");
            k++;
        }
        console.log();
// 4. Do While Loop

        do{
            console.log("Mayank \n");
            k++;
        } while(k===5);
        console.log();

// 5. For Loop
for(var k=1;k<=5;k++)
{
    console.log(5*k+"\n");
}
console.log();        

var num=8;
for(var i=1;i<=10;i++)
{
    console.log(num+" * "+i+" = "+num*i);
    console.log("\n");
    console.log(`${num} * ${i} = ${num*i}`);
}

/*** Section 5 Functions in Javascript  ***/   
/*
1.Function Defination
2.Calling a Function
3.Function Parameter
4.Function Arguments
5.Function Expressions
6.Return Keyword
7.Anonymous Functions

1. Function Defination:
A function is a block of code designed to perform a perticular task or A FUNCTION is a group of reuseable code which can be called anywhere in your program.
This eliminates the NEED of writing same code again and again.Hence following the concept of DRY "DO NOT REPEAT YOURSELF"
Before using a function we must define it.A function defination(also called function declaration/statement)
it consists of function keyword followed by 
Syntax:  function functionName()
         {
             //Statements
         }
1)Name of Function
2)List of parameters enclosed in parenthesis and seperated by comas
3)

2. Calling a Function
Defining a function does not executes it.
A JS function is executed when "something" invokes it (calls it)

3. Difference between Function parameters and Function Arguments
Function Parameters-These are names listed in function defination
Function Arguments -These are the real values passed to the functions
For Example:

function sum(a,b){            -----> THESE ARE PARAMETERS
    var total = a+b;
    console.log(total);
}

sum(20,30);                  ------> THESE ARE ARGUMENTS 
sum(50,50);

4. Function Expressions
Function expression simple means create a function and put it into the variable funExp

5. Return Keyword
When JS reaches return statement ,the function stops executing.Function often compute a return value.
The return value is "returned" back to the "caller"

function sum(a,b){
    return total=a+b;
}
var funExp=sum(5,25);
consle.log("The sum of two no. is"+funExp);

6. Anonymous Functions
A function expression is similar to and has the same syntax as a function declaration One can define "named"
function expressions (where name of the expression might be used in the call stack for example) or "anonymous"
function expressions
*/

//Normal Function
function multiply(a,b)
{
    return a*b;
}
console.log(multiply(20,30)+"\n");

//Anonymous Function -Function without any name and when this function value is assigned directly to a variable then such function are called anonymous
var a=20;
var b=30;
var mul=function(a,b)
{
    return a*b;
}
console.log("The multiplication of "+a+" and "+b+" is "+mul(a,b));


//MODERN JAVASCRIPT OR ECMASCRIPT 😍😍
/*JS discovered in 1996.So updations and features upgraded in JS in 2015 is referred to as ES6 and accordingly 
JS kept updating itself each year*/
/*
Features of Ecmascript 2015 also known as ES6  👏👏👏
1.Let and const and var
2.Template Strings/Litrals
3.Default Arguments
4.Rest Operators
5.Destructuring
6.Object Properties
7.Arrow Functions
8.Spread Operators 
*/
//To use Emoji try (WindowKey + .) Combination





/*1. Let vs Const vs Var
var                   => Function Scoped
let and const         => Block    Scoped

const -const variable cannot be reassigned

*/

/*
Gives Error : const variable cannot be reassigned
const vatr="Prerana";
console.log(vatr);
vatr="Mayank";
console.log(vatr);

*/
//Var

function bioData()
{
    var myFirstName="Mayank";
    console.log(myFirstName);
    if(true)
    {
        var myLastName="Kumar Singh";
        console.log('inner'+myLastName);
        console.log('inner'+myFirstName);

    }
    console.log('innerOuter '+myLastName);
}

/*
Output
Mayank 
inner Kumar Singh
inner Mayank
innerOuter Kumar Singh
*/
bioData();

//Let
// function bioData()
// {
//     let myFirstName="Mayank";
//     console.log(myFirstName);
//     if(true)
//     {
//         let myLastName="Kumar Singh";
//         console.log('inner'+myLastName);
//         console.log('inner'+myFirstName);

//     }
//     console.log('innerOuter '+myLastName);   
// }
// bioData();


// Mayank
// inner Kumar Singh
// inner Mayank
// Error 


/*
2.Template Strings/Litrals

*/
var a1=20;
var b1=30;
var mul=function(a1,b1)
{
    return a1*b1;
}
console.log(`The multiplication of ${a1} and ${b1} is ${mul(a1,b1)}`);

/*3.Default Parameters: Default function parameters allow named parameters to be initialized with
   default values if no value or undefined is passed.
*/
var a1=20;
var b1=30;
var mul=function(a1,b1=90)
{
    return a1*b1;
}
console.log(`The multiplication of ${a1} and ${b1} is ${mul(20)}`);

/*Fat arrow Function*/
//Normal function
var a1=20;
var b1=30;
function mul(a1,b1)
{
    return a1*b1;
}
console.log(`The multiplication of ${a1} and ${b1} is ${mul(a1,b1)}`);
//Fat arrow Function
var a1=20;
var b1=30;
var mull=(a1,b1)=>
{
    return a1*b1;
}
console.log(`The multiplication of ${a1} and ${b1} is ${mull(a1,b1)}`);

var l=20;
var m=30;
var mulll=(l,m)=>`The multiplication of ${l} and ${m} is ${l*m}`;
console.log(mulll());

/*
Arrays in JS
If we want to store multiple data of different types in single list then we use Array

*/
var myNames=new Array;//Array is a class and myNames is object/instance of that class.OPTIONAL LINE
var myNames=["Paurush","Mayank","Babu",426,'R',"Mayank"]; //
console.log(myNames)

//Array Subsection 1😂 Traversal of array😂


console.log(myNames[0],myNames.length);

//For in and For of LOOP  😮THESE ARE ES6 UPDATIONS😮

for(let elements in myNames )  //For in loop will give index of elements of a given array
{
    console.log(elements);
}

for(let elements of myNames )  //For of loop will give elements of a given array
{
    console.log(elements);
}


//Arrays.prototype.forEach()🐒🐒
//Calls a function for each element in the array.Break statement cannot be used 
//in for each function
//Traditional Form
myNames.forEach(function(element,index,array){
    console.log(`${element} index : ${index} ${array}`)

});

myNames.forEach(function(element,index,array){
    console.log(`${element} ${ 2}`)
})
console.log("*****************Using Fat Arrow******************")
myNames.forEach((element,index,array)=>{
    console.log(`${element} ${ 2}`)
});



console.log("\n")
//Fat Arrow
myNames.forEach((element,index,array)=>{
    console.log(`${element} index : ${index} ${array}`)

});


//Array Subsection 2😂😂 Searching and Filter array😂😂

// Array.prototype.indexOf()
// It searches the element from the 0th index Number.Returns the first (least) index of element 
//within the array equal to an element,or -1 f none is found.
console.log(myNames.indexOf("Mayank"));
console.log(myNames.indexOf("HIPARSHU"));

//Array Subsection 3😂😂😂 beech wala udd gya😂😂😂



//Array Subsection 4😂😂😂😂 Performing CRUD Operations😂😂😂😂
//Array.prototype.push()🐓
//The push() method adds one or more elements to the end of an array and returns the ne length of the array 

const animals=['pigs','goats','sheep'];
const count =animals.push('chicken','cats','cow');
console.log(count)








var tddate=new Date(2000,1,20)
console.log(tddate.toLocaleString())






// 👉 object oriented Javascript

// **********************************************************************


// 1️⃣ What is Object Literal?

// Object literal is simply a key:value pair data structure. 

// Storing variables and functions together in one container, 
// we can refer this as an Objects.

// object = school bag 

// 1st way 
// How to create an Object?

// 	  let Data = { 
//       myName : "Mayank Kumar",
//       myAge : 22,
//       getData : function(){
//         console.log(`My name is ${Data.myName} and my age is ${Data.myAge}`);
//       }
//   }

//   Data.getData();

// 2nd way no need to write functions as well after es6
// Function created within an object is called Method

// let Dataa = { 
//   myName : "Mayank Kumar",
//   myAge : 22,
//   getData (){
//     console.log(`My name is ${Dataa.myName} and my age is ${Dataa.myAge}`);
//   }
// }

// Dataa.getData();


//👉 What if we want object as a value inside an Object 
// let Dataaa = { 
//   myName : {
//     realName : "Mayank Kumar Singh",
//     channelName : "MKS" 
//   },
//   myAge : 26,
//   getData (){
//     console.log(`My name is ${Dataaa.myName} and my age is ${Dataaa.myAge}`);
//   }
// }

// console.log(Dataaa.myName.channelName, Dataaa.myName.realName);


// 2️⃣ What is this Object?

// The definition  of "this" object is that it contain the current context/object.
// current context is window itself by default.Using this.SOMETHING we could
// access related method and function of that objects. 

// The this object can have different values depending on where it is placed.  

//This all would work only in console

//For Example 1 
// console.log(this.alert('Awesome'));
// // it refers to the current context and that is window global object 


//ex 2 
// function myName() {
//     console.log(this);
// }
// myName();


// By default "this" ka scope is whole window.But any variable declared
// in global scope is also a part of window hence that variable can also
// by accessed by using this.varName

//ex 3 
// var Nam = 'MKS';
// function myNames() {
//     console.log(this.Nam);
// }
// myNames();

// ex 4 
// const obj = {
//     myAge : 26,
//     fun() {
//       console.log(this.myAge);
//       console.log(obj.myAge);
//       //console.log(myAge); Not Allowed

//     }
// }
// obj.fun();
// console.log(obj.myAge);


// // ex 5 
// // this object will not work with arrow function bcz arrow function is bound to class.
// const obj = {
//     myAge : 26,
//     myName : () => {
//       console.log(this);
//     }
// }
// obj.myName();


// ex 6

// let bioData1 = {
//     myName : {
//         realName : "vinod thapa",
//         channelName : 'thapa technical'
//     },
//     // things to remember is that the myName is the key and the object is act like a value 
//     myAge : 26,
//     getData (){
//       console.log(`My name is ${this.myName.channelName} and my age is ${this.myAge} `);
//     }
//   }

//   bioData1.getData();










































