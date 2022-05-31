//Read a file 
const fs=require("fs");
let text=fs.readFileSync("MKS.txt","utf-8");
text=text.replace("Ji",'Mayank')

console.log("Why are you Shocked")
console.log(text);

console.log("Creating a new file....")
fs.writeFileSync('Mayank.txt',text)
