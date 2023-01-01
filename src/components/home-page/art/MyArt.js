import React from 'react';
import {HashLink} from "react-router-hash-link";
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
                        clicking the <button className='bubble-btn'><HashLink to="/blog#blog-header"><p>button</p></HashLink></button></h3>
                    <img className='vector' src={bubbleVector} alt="vector"/>
                </button>

                <img className='artImg' src={artImg} alt=""/>
            </div>

        </section>
    );
};

export default MyArt;