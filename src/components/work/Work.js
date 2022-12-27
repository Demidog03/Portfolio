import React from 'react';
import './work.css'
import SectionBtn from "../section_buttons/SectionBtn";

const Work = () => {
    return (
        <section className='work flex-center'>
            <div className="container flex-space-btw">
                <SectionBtn
                    icon='briefcase'
                    text='Work experience'
                />
                <div className="work-info">
                    <h2></h2>
                    <p></p>

                    <h3></h3>
                    <div className="work-desc">
                        <box-icon name='check-circle' type='solid' ></box-icon>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;