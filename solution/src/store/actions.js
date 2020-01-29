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

export const toggleTodoState = (id) => {
    return {
        type: 'TOGGLE_TODO_STATE',
        targetTodoId: id
    }
}

export const applyFilter = (filter) => {
    return {
        type: 'APPLY_FILTER',
        filter: filter
    }
}