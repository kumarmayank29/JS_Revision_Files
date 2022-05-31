//Our main aim is to get the counter


const counters=document.querySelectorAll('.counter')
//This line selects all elements with class counter.This can be seen in console as well.Once we get the element we could easily manupulate the values using .innerHtml
counters.forEach((counter)=>{
    //console.log(counter) //We get all three div with class=counter
    counter.innerHTML=0
    
    // Note:Here getAttribute function is used to access custom data which is defined within an div element 
    // so that it can be manupulated using a loop in real time
    const updateCounter=()=>{
        //const targetCount=counter.getAttribute('data-target')

        //console.log(targetCount)
        //console.log(typeof targetCount) 
        //These are actually of string type data.But since we need to manupulate the data we need to convert this to number type data

        /*There are several ways to achieve it
          1.Using the unary plus operator
             var n=+str;

          2.The Number constructor
             var n=Number(str)

          3.The parsefloat function
             var n=parseFloat(str)
        */

         // So here we use Method 1
         const targetCount=+counter.getAttribute('data-target')
        //  console.log(typeof targetCount)
        const startCount=+counter.innerHTML
        const incr=targetCount/100
        if(startCount<targetCount)
        {
            counter.innerHTML=`${Math.round(startCount+incr)}`
            setTimeout(updateCounter,5)
        }else{
            counter.innerHTML=targetCount
        }
    }

    updateCounter();




})