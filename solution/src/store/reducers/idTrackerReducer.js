const idTrackerReducer = (state = 1, action) => {
    if (action.type === 'GENERATE_NEXT_TODO_ID') {
        return state + 1
    }
    return state
}

export default idTrackerReducer