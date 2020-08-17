import React from "react"

const Todos = (props) => {


    return (
        <div className="todo-item">
            <input type="checkbox"
                onChange={(event)=>props.handleChange(props.item.id)}/>
            <h1>{props.item.text}</h1>
        </div>

    )
}

export default Todos