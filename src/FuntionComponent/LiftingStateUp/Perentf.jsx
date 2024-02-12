import React, { useState } from 'react'
import Chlidf from './Chlidf'

export default function Perentf() {
    var [data, setData] = useState("")
    function getData(data) {
        setData(data)
    }
    return (
        <>
            <h1>Function Component props Example..</h1>
            <h2>Perent Component</h2>
            <h4>ID : {data.id} </h4>
            <h4>Name : {data.name} </h4>
            <h4>Desinaton : {data.dsg} </h4>
            <h4>Salary : {data.salary} </h4>
            <h4>City : {data.city} </h4>
            <h4>State : {data.state} </h4>
            <hr />
            <Chlidf getData={getData} />
        </>
    )
}





// import React from 'react'
// import Chlidf from './Chlidf'

// export default function Perentf(props) {
//     function getData(data){
//         console.log(data)
//     }
//     return (
//         <>
//             <h1>Function Component props Example..</h1>
//             <h2>Perent Component</h2>
//             <hr />
//             <Chlidf getData={getData} />
//         </>
//     )
// }




// import React from 'react'
// import Chlidf from './Chlidf'

// export default function Perentf() {
//     return (
//         <>
//             <h1>Function Component props Example..</h1>
//             <h2>Perent Component</h2>
//             <hr />
//             <Chlidf name="Ayush singh" dsg="Student" class={16} />
//         </>
//     )
// }
