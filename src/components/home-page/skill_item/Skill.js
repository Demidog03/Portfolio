import React from 'react';
import './skill.css'

const Skill = (props) => {
    return (
        <button className='flex'>
            <i className={`bx bxl-${props.name}`}></i>
        </button>
    );
};

export default Skill;