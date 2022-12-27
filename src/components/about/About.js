import React from 'react';
import './about.css'
import education from "../../data/education";
import SectionBtn from "../section_buttons/SectionBtn";


const educationData = education
const major = educationData.major; //'Software Engineering'
const matches = major.match(/\b(\w)/g); // ['S','E']
const acronymMajor = matches.join(''); // SE
const About = () => {
    return (
        <section className={'about flex-center'}>
            <h2>About Me</h2>
            <SectionBtn
                icon='graduation'
                text='Education'
            />
            <button className='education-text'>
                <h4>{educationData.major} Major</h4>
                <p>High-energy student currently studying {acronymMajor} in Information Technologies and prepared <br/> to contribute to technological advancement while developing new skills and gaining experience.</p>
            </button>
        </section>
    );
};

export default About;