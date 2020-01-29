import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleTodoState } from '../store/actions';

export default function TodoList() {
    const allTodos = Object.values(useSelector(state => state.todos))
    const dispatch = useDispatch()

    const filter = useSelector(state => state.visibilityFilter)
    let todoList = allTodos
    if (filter === 'active') {
        todoList = allTodos.filter(todo => !todo.completed)
    } else if (filter === 'completed') {
        todoList = allTodos.filter(todo => todo.completed)
    }

    return (
        <div>
            <ul>
                {todoList.map(todo => 
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