import React, { useState } from "react";

export default function StateManageExampleF(){
    var [num,setnum]= useState(0)
    function increment(){
        setnum(num+1)
    }
    function decrement(){
        setnum(num-1)
    }
    return (
        <>
            <h1>Function component</h1>
            <h2>State Mangement Example</h2>
            <h3>Num = {num}</h3>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>
        </>
    )
}