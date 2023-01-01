import React from 'react';
import './work.css'
import SectionBtn from "../section_buttons/SectionBtn";
import workData from "../../../data/workData"
import WorkInfo from "../work_info/WorkInfo";

const Work = () => {
    const works = workData.map(work => {
        return (
            <WorkInfo work = {work}/>
        )
    })
    return (
        <section className='work flex-center' id='work'>
                <SectionBtn
                    type='bxs'
                    icon='briefcase'
                    text='Work experience'
                    bgColor='black'
                    textColor='white'
                />
                <div className="container flex-space-btw">
                    {works}
                </div>
        </section>
    );
};

export default Work;