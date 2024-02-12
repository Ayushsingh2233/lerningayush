import React,{Component}from "react";

var name1 ="Ayush Singh"
var arry1 = [10,20,30,40,50,60,70,80,90,100]
var emp1 = {
    id:1001,
    name:"Amir Khan",
    deg:"devloper"
} 
function display1(){
    return(<h3>this is display1 function</h3>)
}

export default class ImportExportExample extends Component{
    render(){
        return(
            <>
                <h1>this is class component import export example</h1>
            </>
        )
    }
}
export {name1,arry1,emp1,display1}