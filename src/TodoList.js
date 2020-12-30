import React from 'react';
import NewTask from './newTask';

export default function TodoList({ tasks, toggleTask }) {
    return (
        tasks.map(task => {
            return <NewTask key={task.id} toggleTask={toggleTask} task={task} />
        })
    )
}
