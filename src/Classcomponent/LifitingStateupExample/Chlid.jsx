import React,{Component} from "react"

export default class Chlid extends Component{
  render(){
    return(
      <>
        <h1>Child component </h1>
        <button onClick={()=>{
          this.props.getData({
            id:1001,
            name:"Ayush Singh",
            dsg:"Student",
            salary:"9500",
            city:"Noida",
            state:"UP"
          })
        }}>cilck me to transfar data to perent component</button>
      </>
    )
  }
}




// import React, { Component } from 'react'

// export default class Chlid extends Component {
//   render() {
//     return (
//       <>
//         <h1>Chlid Component..</h1>
//         <h3>Name : {this.props.name}</h3>
//         <h3>Desgination : {this.props.dsg}</h3>
//         <h3>Class : {this.props.class}</h3>
//       </>
//     )
//   }
// }
