import React from "react"

export default function Chlidf(props) {
  return (
    <>
      <h1>child component</h1>
      <button onClick={() => {
        props.getData({
          id: 1001,
          name: "Ayush Singh",
          dsg: "Student",
          salary: 9500,
          city: "Noida",
          state: "UP"
        })
      }}>click me to change data </button>
    </>
  )
}



// import React from 'react'

// export default function Chlidf(props) {
//   return (
//     <>
//         <h1>Child Component</h1>
//         <h3>Name : {props.name}</h3>
//         <h3>Desgination : {props.dsg}</h3>
//         <h3>Class : {props.class}</h3>
//     </>
//   )
// }
