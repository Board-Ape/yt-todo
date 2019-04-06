import React from 'react';

const Todos = ({ todos }) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div key={todo.id} className="todos collection">
                    <p>{todo.content}</p>
                </div>
            )
        })
    ) : (
        <p className="center">You have no todos</p>
    )

    return (
        <div>
            { todoList }
        </div>
    )
}

export default Todos;