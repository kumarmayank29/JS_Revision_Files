console.log("This is module")

function average(arr){
    let sum=0;
    arr.forEach(element => {
        sum+=element
    });
    return sum/arr.length;
}

//module.exports is itself an object


//To explicitly use that function in other file we need to export it
//module.exports=average;


//When we want to export multiple things

module.exports={
    avg:average,
    name:"Mayank",
    repo:"Github"
}