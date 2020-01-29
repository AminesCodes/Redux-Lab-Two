const initialSate = {
    nextTodoId: 1,
    todos: {},
    visibilityFilter: 'all' // One of "all", "completed" or "active"
}

const todosReducer = (state = initialSate, action) => {
    const newState = { ...state }
    switch (action.type) {
        case 'ADD_TODO':
            newState.todos[state.nextTodoId] = ({id: state.nextTodoId, text: action.text, completed: false})
            break;

        case 'TOGGLE_TODO_STATE':
            newState.todos[action.targetTodoId].completed = !state.todos[action.targetTodoId].completed
            break;

        case 'APPLY_FILTER':
            newState.visibilityFilter = action.filter
            break;
        
        default:
            break;
    }
    return newState
}

export default todosReducer