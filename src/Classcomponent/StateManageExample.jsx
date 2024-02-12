import React, { Component } from "react";

export default class StateManageExample extends Component{
    constructor(){
        super()
        this.state = {
            num : 0
        }
    }
    increment(){
        this.setState({num:this.state.num+1})
    }
    decrement(){
        this.setState({num:this.state.num-1})
    }
    render(){
        return(
            <>
                <h1>Class Component</h1>
                <h2>State Mangement Example</h2>
                <h3>Num = {this.state.num}</h3>
                <button onClick={()=>this.decrement()}>decrement</button>
                <button onClick={()=>this.increment()}>increment</button>
            </>
        )
    }
}
