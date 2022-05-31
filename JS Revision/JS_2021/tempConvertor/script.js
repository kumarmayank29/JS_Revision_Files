const calculateTemp=()=>{
    // Using document.getElementById("temp").value; we can directly fetch the value we submitted
    // in the entry field of FormData.However here we need to catch the value and do respective
    // conversion in Degree celcius/F or kelvin

    const numberTemp=document.getElementById("temp").value;
    // console.log(numberTemp)
    const tempSelected=document.getElementById('temp_diff');
    const valueTemp=temp_diff.options[tempSelected.selectedIndex].value;
    //Note:In temp_diff.options[tempSelected.selectedIndex].value .Option values are stored in form 
    // of array and each option can be accessed using index of array for which we use .selectedIndex].value

    const celToFah=(Celcius)=>{
        let Fahrenheit=Math.round((Celcius*9/5)+32);
        return Fahrenheit
    }

    const fahToCel =(Fahrenheit)=> {
        let Celcius =Math.round((Fahrenheit - 32)* 5/9 );
        return Celcius;
        }
        
        let result;
        if(valueTemp == 'Celcius'){
        result= celToFah(numberTemp);
        document.getElementById("resultContainer").innerHTML = `${result}°Fahrenheit`;
        }else{
        result = fahToCel(numberTemp);
        document.getElementById("resultContainer").innerHTML = `${result}°Celcius`;
        }
    }

