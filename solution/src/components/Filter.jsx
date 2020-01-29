import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

import { applyFilter } from '../store/actions'

export default function Filter(props) {
    const currentFilter = useSelector(state => state.visibilityFilter)
    const dispatch = useDispatch()

    const handleFilter = event => {
        const filter = event.target.value
        if (filter === 'all' || filter === 'active' || filter === 'completed') {
            dispatch(applyFilter(filter))
        }
    }

    return (
        <div onChange={handleFilter}>
            <span>Show: </span>
            <label>
                <input type="radio" name="status" value="all" checked={currentFilter === 'all'}/> All
            </label>
            <label>
                <input type="radio" name="status" value="active" checked={currentFilter === 'active'}/> Active
            </label>
            <label>
                <input type="radio" name="status" value="completed" checked={currentFilter === 'completed'}/> Completed
            </label>
        </div>
    )
}