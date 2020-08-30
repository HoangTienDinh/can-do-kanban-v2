import React from 'react'

const Task = ({ key, task}) => {
    return (
        <div>
            {task.content}
        </div>
    )
}

export default Task
