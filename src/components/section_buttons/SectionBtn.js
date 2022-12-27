import React from 'react';
import './sectionBtn.css'

const SectionBtn = (props) => {
    return (
        <div className="education-icons flex-space-btw">
            <button className='gradIcon flex-center'>
                <box-icon size='lg' id='gradIcon-img' name={props.icon} type='solid' color="white"></box-icon>
            </button>
            <button className='education-icon'>
                <h3>{props.text}</h3>
            </button>
        </div>
    );
};

export default SectionBtn;