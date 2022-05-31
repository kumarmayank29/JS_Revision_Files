// 👉👉CallBack Hell
// The biggest problem with callbacks is that they do not scale well 
// for even moderately complex asynchronous code. The resulting code 
// often becomes hard to read, easy to break,and hard to debug.
//to overcome this problem promises were introduced


// // 8️⃣: CallBack Hell 

setTimeout(()=>{
    console.log("1️⃣ works is done");    
    setTimeout(()=>{
        console.log("2️⃣ works is done"); 
        setTimeout(()=>{
            console.log("3️⃣ works is done");  
            setTimeout(()=>{
                console.log("4️⃣ works is done"); 
                setTimeout(()=>{
                    console.log("5️⃣ works is done");   
                    setTimeout(()=>{
                        console.log("6️⃣ works is done");    
                    }, 1000) 
                }, 1000)   
            }, 1000)  
        }, 1000)   
    }, 1000)
}, 1000)



