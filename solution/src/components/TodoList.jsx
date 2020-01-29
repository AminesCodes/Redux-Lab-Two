import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleTodoState } from '../store/actions';

export default function TodoList() {
    const allTodos = Object.values(useSelector(state => state.todos))
    console.log(allTodos)
    const dispatch = useDispatch()

    return (
        <div>
            <ul>
                {allTodos.map(todo => 
                    <li 
                        key={todo.id} 
                        style={todo.completed ? {textDecoration: 'line-through'} : {fontWeight: 'bold'}} 
                        onClick={() => dispatch(toggleTodoState(todo.id))}
                    >
                        {todo.text}
                    </li>)}
            </ul>
        </div>
    );
};