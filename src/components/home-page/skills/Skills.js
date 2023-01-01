import React from 'react';
import './skills.css'
import SectionBtn from "../section_buttons/SectionBtn";
import Skill from "../skill_item/Skill";
import skillsData from "../../../data/skillsData";



const Skills = () => {
    let skillsArray = []
    let skillsRow = []

    //Array of all skills
    const skills = skillsData.map(skill => {
        return (
            <Skill name = {skill}/>
        )
    })

    /**Pyramid of skills*/
    // 0 - 3 => 0,1,2
    // 3 - 7 => 3,4,5,6, interval = 4
    // 7 - 12 => 7,8,9,10,11 interval = 5
    // 12 - 18 => 12, 13, 14, 15, 16, 17 interval = 6

    let startIndex = 0
    let endIndex = 3
    let interval = endIndex+1 //interval between end indexes
    let rowNumber = 3 //height of pyramid //ToDo: need to modify j index to more dynamic

    for (let j = 0; j < rowNumber; j++) {
        console.log(startIndex + ' ' + endIndex)

        for (let i = startIndex; i < endIndex; i++) {
                skillsArray.push(skills[i])
        }
        if(j===rowNumber-1){
            skillsArray.push(<button className='andMoreBtn'><h4>and<br/>more</h4></button>)
        }
        //changing start and end indexes
        startIndex = endIndex //swapping start index with end index
        endIndex = endIndex+interval //changing end index
        interval++

        skillsRow.push(
            <div className="skills-row flex-center">
                {skillsArray}
            </div>
        )

        skillsArray = [] //clear skillsArray
    }


    return (
        <section className='skills flex-center' id='skills'>
            <SectionBtn
                type='bx'
                icon='code-alt'
                text='Skills'
                bgColor='white' //need to change to variables
                textColor='black' //need to change to variables
            />
            <div className="container flex-vertical-space">
                    {skillsRow}
            </div>

            <div className="projects flex">
                <h3 className="projects-text">You can find my <b>pet projects</b></h3>
                <a href="https://github.com/Demidog03"><button className='flex-center'><h3>here</h3> <i className='bx bxs-right-arrow-circle'></i></button></a>
            </div>
        </section>
    );
};

export default Skills;