import React from 'react'

const Todo = (props) => {
    // Class condition for creating a strike with CSS
    const todoClasses = [];
    if (props.todo.complete) {
        todoClasses.push("strike")
    }

    return (
        <div>
            {/* Event listener for checkbox toggle function */}
            <span className={todoClasses}>{props.todo.text}</span>
            <input onChange={(event) => {
                props.handleToggleComplete(props.i);
            }} checked={props.todo.complete} type="checkbox" />
            {/* Event listener for delete button */}
            <button className="btn btn-info m-1 p-6"
                onClick={(event) => {
                    props.handleTodoDelete(props.i);
                }}>
                Delete
            </button>
        </div>
    )
}

export default Todo
