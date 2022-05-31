// Synchronous or Blocking
// -Line by Line Execution

//Asynchronous or non blocking
// Line by Line execution not garanteed
// call back will Fire


//Here we are using Asynchronous Nature of JS.So jabtak File puri read nahi ho jati tab tak
//callback function wont be fired.And Remaning program continues to execute hence non blocking 
//nature of JS is seen here
const fs=require("fs");
fs.readFile("Mayank.txt","utf-8",(err,data)=>{
    console.log(err,data);
});
console.log("This is message")