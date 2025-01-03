import {  useEffect, useState } from "react";

function DisplayName()
{
    let[name,setname]=useState("Amit");

     let[length,setLength]=useState(2);
    let[breadth,setBreadth] =useState(7);
    let[area,setArea]=useState(length*breadth);
    useEffect(()=>{
     
      let value= setTimeout(() => {
        setArea(length*breadth);
        
       }, 5000);
       // cleanup function : timer ko clear karna
       return()=>{
        console.log("cleanup function");
        clearTimeout(value);
       }

     },[length,breadth])
    

    return(
        <div>
            <input type="text" value={name} onChange={(e)=>{
                setname(e.target.value);
                
            }}/>

            <h1 className="name1">{name}</h1>

            <hr />
            <input type="number" placeholder="length" value={length} onChange={(event)=>{
            setLength(event.target.value);
            
            }}/>

            <input type="number" placeholder="breadth" value={breadth} onChange={(e)=>{
                setBreadth(e.target.value);
            
            }} />
            <h1>Area is {area} </h1>
            
        </div>
    );
}
export default DisplayName;