import { useState } from "react";

function ChangeName()
{
   let [year,setYear]= useState("Hello 2025");
        const change=()=>{
            setYear("Byee 2024")
    }

    let [changeName, setName]= useState("Saloni");
    const change2=()=>{
        setName("Shriya")
    }

    let [students, changeStudent]=useState("Nisha");
    const change3=()=>{
        changeStudent("Alok")
    }

    return(
        <div>
            <h1 onClick={change}>{year}</h1>
            <hr />

            <h1 onClick={change2}>{changeName}</h1>

            <hr />
            <h1 onClick={change3} className="name">{students}</h1>

          
        </div>
    );
}
export default ChangeName;