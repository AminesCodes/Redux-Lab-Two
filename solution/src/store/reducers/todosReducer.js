const todosReducer = (state = {}, action) => {
    const newState = { ...state }
    switch (action.type) {
        case 'ADD_TODO':
            newState[action.payload.id] = action.payload
            break;

        case 'TOGGLE_TODO_STATE':
            newState[action.targetTodoId].completed = !state[action.targetTodoId].completed
            break;

        default:
            break;
    }
    return newState
}

export default todosReducer