import React from 'react';
import './university.css'
import education from "../../../data/education";
const aituLogo = require('../../../assets/images/aituLogo.png')

const educationData = education
let courseYear
if (educationData.course===1){
    courseYear = 'first'
}
else if(educationData.course===2){
    courseYear = 'second'
}
else if(educationData.course===3){
    courseYear = 'third'
}
else{
    courseYear = 'fourth'
}

const University = () => {
    return (
        <section className="university-section flex-center">
            <div className="container flex-space-btw">
                <div className="university-text">
                    <div className="university-title">
                        <h3>Student of {educationData.schoolName} </h3>
                        <p>{educationData.country}, {educationData.town}.</p>
                    </div>
                    <h4 className="university-description">
                        I am in my {educationData.finalStatus ? 'final' : courseYear} year of undergraduate in Astana IT University
                    </h4>
                    <h4>Average performance GPA - <b>{educationData.avgGPA}</b></h4>
                </div>
                <img src={aituLogo} alt=""/>
            </div>
        </section>
    );
};

export default University;