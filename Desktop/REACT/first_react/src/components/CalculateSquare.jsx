import { useEffect, useState } from "react";

function CalculateSquare()
{
    let[value1,calculateValue]=useState(16);
    
    let[area,calculateArea]=useState(value1*value1);
    useEffect(()=>{
        calculateArea(value1*value1);
    },[value1])

    return(
        <div>
        <input type="number" value={value1} onChange={(e)=>{
    calculateValue(e.target.value);

    
        }} />
        <h1>Area is {area}</h1>
        </div>
    );
}
export default CalculateSquare;