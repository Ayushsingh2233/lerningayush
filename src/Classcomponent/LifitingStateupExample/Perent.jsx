import React, { Component } from 'react'
import Chlid from './Chlid'

export default class Perent extends Component {
  constructor(){
    super()
    this.state={
      id:"",
      name:"",
      dsg:"",
      salary:"",
      city:"",
      state:"",
    }
  }
  getData=(data)=>{
    console.log(data);
    this.setState({
      id:data.id,
      name:data.name,
      salary:data.salary,
      dsg:data.dsg,
      city:data.city,
      state:data.state
    })
  }
  render() {
    return (
      <>
        <h1>Class Component Props Example..</h1>
        <h2>Perent Component..</h2>
        <h4>ID : {this.state.id}</h4>
        <h4>NAME : {this.state.name}</h4>
        <h4>SALARY : {this.state.salary}</h4>
        <h4>DEGINATION : {this.state.dsg}</h4>
        <h4>CITY : {this.state.city}</h4>
        <h4>STATE : {this.state.state}</h4>
        <hr />
        <Chlid getData={this.getData}/>
      </>
    )
  }
}





// import React, { Component } from 'react'
// import Chlid from './Chlid'

// export default class Perent extends Component {
//   getData=(data)=>{
//     console.log(data);
//   }
//   render() {
//     return (
//       <>
//         <h1>Class Component Props Example..</h1>
//         <h2>Perent Component..</h2>
//         <hr />
//         <Chlid getData={this.getData} />
//       </>
//     )
//   }
// }






// import React, { Component } from 'react'
// import Chlid from './Chlid'

// export default class Perent extends Component {
//   render() {
//     return (
//       <>
//         <h1>Class Component Props Example..</h1>
//         <h2>Perent Component..</h2>
//         <hr />
//         <Chlid name="Ayush Singh" dsg="Student" class={15} />
//       </>
//     )
//   }
// }
