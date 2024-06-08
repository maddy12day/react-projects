import { useRef, useState } from "react"


export const Counter = ()=>{
    const[count,setCount] = useState(0);
    const inputbox = useRef("");
    return(
        <>
            <button onClick={()=>setCount((count)=>count+1)}>+</button>
            <h1>current count is {count}</h1>
            <button onClick={()=>setCount((count)=>count-1)}>-</button>
        </>
    )
}