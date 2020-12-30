import React from 'react'

export default function NewTask({ task, toggleTask }) {
    function handleCheckboxClick() {
        toggleTask(task.id)
    }
    
    return (
        <div>
            <label>
                <input type="checkbox" checked={task.complete} onChange={handleCheckboxClick} />
                {task.name}
            </label>
        </div>
    )
}
