const filterReducer = (state = '', action) => {
    if (action.type === 'APPLY_FILTER') {
        return action.filter
    }
    return state
}

export default filterReducer