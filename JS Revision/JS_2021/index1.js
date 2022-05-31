
//Destructing in ES6
// The destructuring assignment syntax is a JavaScript expression
// that makes it possible to unpack values from arrays,
// or properties from objects, into distinct variables.

// ➡> Array Destructuring

//const myBioData =['Mayank', 'Kumar', 22]; 

//To access values directly,just create an aray of values which we want to use
//directly and store in an array.Here position matters alot
// let myFName = myBioData [0];
// let myLName = myBioData [1];
// let myAge = myBioData [2];
//console.log(myAge);

//Using Array Destructuring
// let [myFName, myLName ,myAge]=myBioData
// console.log(`My First name is ${myFName} and my Last name is ${myLName}`)

//We can add values too using Array Destructuring
// let [myFName,myLName,myAge,myDegree="B.Tech"] = myBioData;
// console.log(`My First name is ${myFName} and my Last name is ${myLName} and my degree is ${myDegree}`)


//Object Destructuring
// const myMatha={
//     myN:'Mayank',
//     myM:'Kumar',
//     myL:'Singh',

// }

//General Way
//  let nameF=myMatha.myN
//  let nameM=myMatha.myM
//    //console.log(`First Name is ${myObj.myN} and middle name is ${myObj.myM}`)   
//    //console.log(`First Name is ${nameF} and middle name is ${nameM}`) 

//let {myN,myM,myL,myg="22"}=myObj
//console.log(`First Name is ${myN} and middle name is ${myM} and age is ${myg}`) 



//object properties
    //we can now use Dynamic properties

    //So for displaying dynamic properties within objects use [] square brackets
    // let myName ="Anwesha";
    // const myBio={
    //   [myName]: "how are you?",
    //   [20+2]: "is my age",
    //   [1806593] : "is my roll number",
    //   [20/2]: "Its division",
    //   [20*2]: "Its multiplication"
      
    // }
    // console.log(myBio)

    //no need to write key and value,if both are same

    // let myName="Anwesha Deb"
    // let myAge=22
    // let myHobby="Dance"

    // const myBio={myName,myAge,myHobby}
    // console.log(myBio)



    //Spread Operator

//   const colors=['red','blue','green','orange']
//   const myColors=['red','blue','green','orange','black','yellow']
//   const myFav=[...colors,'black','yellow'] //Here ... is spread operator
//   const arr=[...myFav,'Mayank','Kumar',...myColors,'Anwesha']
//   console.log(myFav)
//   console.log(arr)
  

//ECMA script 2016/ES7(already done)
//1.array.include
// const colors=['red','blue','green','orange']
// const isPresent=colors.includes('blue')
// console.log(isPresent)

// output:true

//2.Exponential operator(**)
// console.log(2**3)

//ECMA script 2017/ES8 features
//'String padding, Object.values(),Object.entries(),Async function''

//String padding:Add extra spaces depending on padStart or padEnd
//Number of spaces added at start/end=argument-No of Character

// let myName="Anwesha"
// console.log(myName.padStart(10))

// //output:   Anwesha
// let myAge="26".padEnd(10)
// myAge

//If you want to see for better result run in console

// Object.values()
// Object.entries()

// const p={name: 'Titli', age:22}
// console.log(Object.values(p))
// console.log(Object.entries(p))

//output:[ 'Titli', 22 ]
//output:[ [ 'name', 'Titli' ], [ 'age', 22 ] ]

//ES2018 features/ES9
// Now we can use Spread Operator in object also .Example are shown below:


// const p={name: 'Titli', age:22}
// const Secondp={...p}
// console.log(p)
// console.log(Secondp)

// output:
// { name: 'Titli', age: 22 }
// { name: 'Titli', age: 22 }

//ES2019 features/ES10
//flat()

// const arr=[['z1','z2'],
// ['z3','z7'],['z5','z9'],
// ['z1','z21'],['z3',['z56','z98']]]


// // //Incase of flat use infinity from 2D to infinite dimentsion
// console.log(arr.flat(Infinity))

// output:[
//   'z1',  'z2',  'z3',
//   'z7',  'z5',  'z9',
//   'z1',  'z21', 'z3',
//   'z56', 'z98'
// ]

//Object.fromEntries() :To Revert back to original object

// const arrObj=[ [ 'name', 'Titli' ], [ 'age', 22 ] ]
// console.log(Object.fromEntries(arrObj))

// output:{ name: 'Titli', age: 22 }

//ES2020
// let maxNumber = Number.MAX_SAFE_INTEGER;
// console.log(maxNumber+' = '+typeof maxNumber) // 9007199254740991 = number
// maxNumber=maxNumber+1
// console.log(maxNumber+' = '+typeof maxNumber) //9007199254740992 = number
// maxNumber=maxNumber+1
// console.log(maxNumber+' = '+typeof maxNumber) // 9007199254740992 = number




