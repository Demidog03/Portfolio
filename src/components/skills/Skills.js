import React from 'react';
import './skills.css'
import SectionBtn from "../section_buttons/SectionBtn";
import Skill from "../skill_item/Skill";

const Skills = () => {
    return (
        <section className='skills flex-center'>
            <SectionBtn
                type='bx'
                icon='code-alt'
                text='Skills'
                bgColor='white' //need to change to variables
                textColor='black' //need to change to variables
            />
            <div className="container flex-vertical-space">
                <div className="skills-row flex-center">
                    <Skill/>
                    <Skill/>
                    <Skill/>
                </div>
                <div className="skills-row flex-center">
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                </div>
                <div className="skills-row flex-center">
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                </div>
            </div>

            <div className="projects flex">
                <h3 className="projects-text">You can find my <b>pet projects</b></h3>
                <button className='flex-center'><h3>here</h3> <i className='bx bxs-right-arrow-circle'></i></button>
            </div>
        </section>
    );
};

export default Skills;