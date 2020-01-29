export const incrementNextTodoId = () => {
    return {
        type: 'GENERATE_NEXT_TODO_ID'
    }
}

export const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        payload: todo
    }
}

export const toggleTodoState = () => {
    return {
        type: 'TOGGLE_TODO_STATE'
    }
}

export const applyFilter = (filter) => {
    return {
        type: 'APPLY_FILTER',
        filter: filter
    }
}