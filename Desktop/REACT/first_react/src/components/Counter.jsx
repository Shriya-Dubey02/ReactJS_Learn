import { useState } from "react";

function Counter()
{
    let[Counter,setcount]=useState(0);
    const increment=()=>{setcount(Counter+1)};
    const decrement=()=>{setcount(Counter-1)};
    return(

        <div>
            <button onClick={decrement}>Decrement</button>
            <h1>{Counter}</h1>
            <button onClick={increment}>Increment</button>

          
        
        </div>
    )
    
}
export default Counter;