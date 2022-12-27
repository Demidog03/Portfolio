import React from 'react';
import './sectionBtn.css'

const SectionBtn = (props) => {
    const style = {
        backgroundColor: props.bgColor,
        color: props.textColor
    }
    return (
        <div  className="education-icons flex-space-btw">
            <button style={style}className='gradIcon flex-center'>
                <i id='gradIcon-img' className={`bx ${props.type}-${props.icon}`}></i>
            </button>
            <button style={style} className='education-icon'>
                <h3>{props.text}</h3>
            </button>
        </div>
    );
};

export default SectionBtn;