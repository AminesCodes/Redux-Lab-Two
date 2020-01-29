import React from 'react'

export default function Filter(props) {
    
    return (
        <div>
            <span>Show: </span>
            <input type="radio" name="status" value="all" /> All
            <input type="radio" name="status" value="active" /> Active
            <input type="radio" name="status" value="completed" /> Completed
        </div>
    )
}