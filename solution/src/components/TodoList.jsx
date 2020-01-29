import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleTodoState } from '../store/actions'

export default function TodoList(props) {
    const allTodos = Object.values(useSelector(state => state.todos))
    console.log(props)
    const dispatch = useDispatch()

    return (
        <div>
            <ul>
                {allTodos.map(todo => 
                    <li 
                        key={todo.id} 
                        style={todo.completed ? {textDecoration: 'line-through'} : {}} 
                        onClick={() => dispatch(toggleTodoState())}
                    >
                        {todo.text}
                    </li>)}
            </ul>
        </div>
    );
};