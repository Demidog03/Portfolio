import React from 'react';
import './workInfo.css'

const WorkInfo = () => {
    return (
        <div className="work-info">
            <h3>Web Programming Mentor</h3>
            <p className='date'>(2021-06 – 2022-05)</p>

            <div className="work-company flex">
                <h3>Morrison Academy</h3>
                <i className='bx bx-right-arrow-circle'></i>
            </div>
            <div className="work-desc">
                <div className="task flex">
                    <i className='bx bxs-check-circle'></i>
                    <p>I supported and helped students in learning front-end programming.</p>
                </div>
                <div className="task flex">
                    <i className='bx bxs-check-circle'></i>
                    <p>Additionally, I gave lectures.</p>
                </div>
            </div>
        </div>
    );
};

export default WorkInfo;