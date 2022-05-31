{/* <div id="joke" class="joke">Awesome Joke is loading...</div> */}
{/* <button id="jokeBtn" class="btn">Next JOKE</button> */}



// What is Promise?
// The Promise object represents the eventual completion (or failure) of an asynchronous operation 
// and its resulting value.

// A Promise is in one of these states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.





// What is fetch() method in JS?
// The fetch() method in JavaScript is used to request to the server and load the information in the webpages.
// The request can be of any APIs that returns the data of the format JSON or XML. This method returns a promise.

// Syntax: fetch( url, options )
// Parameters: This method accept two parameters as mentioned above and described below:

// URL: It is the URL to which the request is to be made.
// Options: It is an array of properties. It is an optional parameter.

// Return Value: It returns a promises whether it is resolved or not. The return data can be of the format JSON or XML.
// It can be the array of objects or simply a single object.


// GET https://icanhazdadjoke.com/

const jokes= document.querySelector("#joke");
const jokeBtn= document.querySelector("#jokeBtn");


// Status 200 means everything ie data has come from API perfectly.This can be checked
// Network<Preview

// const generateJokes =()=>{

//     const setHeader={
//         headers:{
//             Accept:"application/json"
//         }
//     }
//     fetch('https://icanhazdadjoke.com/',setHeader)
//     .then((res)=> res.json())
//     .then((data)=>{
//         jokes.innerHTML=data.joke;
//     }).catch((error)=>{
//         console.log(error);
//     })
// }

// jokeBtn.addEventListener('click',generateJokes)
// generateJokes()







//How To use fetch API

// 1.Fetch returns a Promise.This means fetch() is promise based.
// Since its promise based so we can use async/await or .then/.catch
// with it

// Step 1
// fetch("https://icanhazdadjoke.com/")





//Step 2:Fetch can have two actions.Either it will return response or an error.
// To code this we use .then() and .catch()

// fetch("https://icanhazdadjoke.com/")
//  .then(res=>console.log(res))

//  So on implementing above code we get response(check it in console of devtools)
//  that says status:200 status text=empty and OK=true.This helps us 
//  know this was successful and has a body which is going to contain our
//  all our data





//  Step 3:🤔🤔BUT THIS BODY OF DATA IS ACTUALLY NOT ACCESSIBLE DIRECTLY FROM THE RESPONSE
//  OBJECT.WE NEED TO CALL A METHOD ON IT TO CONVERT THIS RESPONSE TO A JSON .SINCE WE
//  ARE ACTUALLY USING JSON DATA SO WHAT WE NEED TO DO IS USE res.json() AND THIS IS 
//  GOING TO RETURN ANOTHER PROMISE.THEN WE NEED TO USE .then AGAIN AND THIS IS GOING
//  TO BE OUR ACTUAL DATA 

//Method 1:Using .then and .catch
// const generateJokes =()=>{

//     const setHeader={
//         headers:{
//             Accept:"application/json"
//         }
//     }

// fetch("https://icanhazdadjoke.com/",setHeader)
//  .then((res)=> res.json())
//  .then((data)=>{
//     jokes.innerHTML=data.joke;
//  }).catch((error)=>{
//             console.log(error);
//         })
    
// }
// jokeBtn.addEventListener('click',generateJokes)
// generateJokes()


// Using Aync await ,async means Asynchronous Programming and await means just Wait
// Since fetch method returns a promise and for that we need to Wait.

// So How to create an async function:
// Method 1:const generateJokes = async() =>{
// Method 2:async function generateJokes(){}



//Method 1:Using async and await
const generateJokes = async ()=>{

    try{
        const setHeader={
            headers:{
                Accept:"application/json"
            }
        }
    
    const res=await fetch("https://icanhazdadjoke.com/",setHeader)
    const data=await res.json()
    jokes.innerHTML=data.joke
    }catch(err){
        console.log(`The error is ${err}`)
    }
}
    
jokeBtn.addEventListener('click',generateJokes)
generateJokes()




 







