import React from 'react'

const Form = (props) => {
    return (
        <form onSubmit={props.handleRobotAdd} >
            <p>What is your new robot's name?</p>
            <input 
            value = {props.input} 
            onChange = {props.handleInput}
            type='text' 
            placeholder='name'/>
            <button>Create Robot</button>
        </form>
    )
}

export default Form