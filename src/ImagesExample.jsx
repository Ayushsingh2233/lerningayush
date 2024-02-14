import React from 'react'
import p2 from "../src/assets/images/p2.jpg"

export default function ImagesExample() {
  return (
    <div className='main'>
        <div className="center">
            <h4>Images Example</h4>
            <div className="items">
                <img src={require("../src/assets/images/p1.jpg")} alt="" />
                <img src={p2} alt="" />
                <img src={require("../src/assets/images/p3.jpg")} alt="" />
            </div>
        </div>
    </div>
  )
}
