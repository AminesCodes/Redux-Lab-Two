import React from 'react'

export default function TodoForm(props) {
    
    return (
        <div>
            <form>
                <label htmlFor="todo">Todo: </label>
                <input type="text" name="todo" id="todo"/>
                <button>Add Todo</button>
            </form>
        </div>
    )
}