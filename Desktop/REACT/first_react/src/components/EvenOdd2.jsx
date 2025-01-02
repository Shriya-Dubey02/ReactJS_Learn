import { useState } from "react";

function EvenOdd2()
{
    let[inputValue,setvalue]=useState(1);
    return(
        <div>
            <input type="number" value={inputValue} onChange={(e)=>{
                if(inputValue%2==0)
                {
                    setvalue(e.target.value);
                    console.log("Even");
                }
                else{
                    setvalue(e.target.value);
                    console.log("Odd");
                }
            }} />
        </div>
    );
}
export default EvenOdd2;