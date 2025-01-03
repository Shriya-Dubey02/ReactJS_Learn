import { useState } from "react";

function LoggedIn()
{
    let[loggedIn,setloggedIn]=useState(false)
    return(
        
// Ternary operator
// expression?value1:value2
// if expr is true = value 1 and false= value2
        <div>
            {/* true pe condition will be executed and false pe kuch nhi milega */}

            {false && <h1>condition is true</h1>}



            <hr />
            {
            loggedIn?
            <div>
            <h1>Welcome User</h1>
            <button onClick={()=>{
                setloggedIn(false);
            }}>Logout</button>
            </div>:
            
            <button onClick={()=>{
                setloggedIn(true);
            }}>Log in</button>
        }
            
        </div>
    )
}
export default LoggedIn;