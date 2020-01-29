import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { addTodo, incrementNextTodoId } from '../store/actions'

export default function TodoForm() {
    const todoId = useSelector(state => state.nextTodoId)
    const dispatch = useDispatch()

    const [todo, setTodo] = useState('')

    const handleForm = e => {
        e.preventDefault()

        if (todo) {
            const newTodo = {
                id: todoId,
                text: todo,
                completed: false
            }
            dispatch(addTodo(newTodo))
            dispatch(incrementNextTodoId())
            setTodo('')
        }
    }

    return (
        <div>
            <form onSubmit={handleForm}>
                <label htmlFor="todo">Todo: </label>
                <input 
                    type="text" 
                    name="todo" 
                    id="todo" 
                    value={todo} 
                    onChange={e => setTodo(e.target.value)}/>
                <button>Add Todo</button>
            </form>
        </div>
    )
}