import { combineReducers} from 'redux'

import filterReducer from './filterReducer'
import idTrackerReducer from './idTrackerReducer'
import todosReducer from './todosReducer'

const rootReducer = combineReducers({
    nextTodoId: idTrackerReducer,
    todos: todosReducer,
    visibilityFilter: filterReducer
})

export default rootReducer