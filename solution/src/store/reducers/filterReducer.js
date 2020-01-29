const filterReducer = (state = 'all', action) => {
    if (action.type === 'APPLY_FILTER') {
        return action.filter
    }
    return state
}

export default filterReducer