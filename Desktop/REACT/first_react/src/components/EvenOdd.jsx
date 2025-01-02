import { useEffect, useState } from "react";

function EvenOdd()
{
   let[inputValue,setinputvalue]= useState(1);
   let[answer,setanswer]=useState("odd");
   useEffect(()=>{

    let v=parseInt(inputValue);
    if(v%2==0)
    
        setanswer("Even");
    
    else
        setanswer("Odd");
    
    // console.log("EvenODD")
   },[inputValue])

    return(
        <div>
            <input type="number" value={inputValue} onChange={(e)=>{
                setinputvalue(e.target.value);
                // console.log(inputValue);

            }} />

            <h1>{answer}</h1>
        </div>
    );


}
export default EvenOdd;