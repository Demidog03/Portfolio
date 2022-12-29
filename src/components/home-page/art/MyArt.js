import React from 'react';
import './myArt.css'
import bubbleVector from "../../../assets/images/bubbleVector.svg";
const artImg = require('../../../assets/images/marin.png')

const MyArt = () => {
    return (
        <section className='myArt flex'>
            <h2>My Art</h2>
            <div className="art-container flex">
                <button className='art-bubble'>
                    <h3>I have many interests, but the<br/>
                        main one is <b>drawing</b>!
                        <br/>
                        You can see my art works by<br/>
                        clicking the <button className='bubble-btn'><p>button</p></button></h3>
                    <img className='vector' src={bubbleVector} alt="vector"/>
                </button>

                <img className='artImg' src={artImg} alt=""/>
            </div>

        </section>
    );
};

export default MyArt;