import React from 'react';
import './work.css'
import SectionBtn from "../section_buttons/SectionBtn";
import WorkInfo from "../work_info/WorkInfo";

const Work = () => {
    return (
        <section className='work flex-center'>
                <SectionBtn
                    type='bxs'
                    icon='briefcase'
                    text='Work experience'
                    bgColor='black'
                    textColor='white'
                />
                <div className="container flex-space-btw">
                    <WorkInfo/>
                    <WorkInfo/>
                </div>
        </section>
    );
};

export default Work;