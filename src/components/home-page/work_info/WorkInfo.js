import React from 'react';
import './workInfo.css'

const WorkInfo = (props) => {
    const tasks = props.work.tasks.map(task => {
        return (
            <div className="task flex">
                <i className='bx bxs-check-circle'></i>
                <p>{task}</p>
            </div>
        )
    })
    return (
        <div className="work-info">
            <h3>{props.work.position}</h3>
            <p className='date'>({props.work.time})</p>

            <div className="work-company flex">
                <h3>{props.work.company}</h3>
                <i className='bx bx-right-arrow-circle'></i>
            </div>
            <div className="work-desc">
                {tasks}
            </div>
        </div>
    );
};

export default WorkInfo;