import React from 'react';
import './myArt.css'
const artImg = require('../../assets/images/marin.png')

const MyArt = () => {
    return (
        <section className='myArt flex'>
            <h2>My Art</h2>
            <div className="art-container flex">
                <button className='art-bubble'>
                    <p>I have many interests, but the
                        main one is <b>drawing</b>!
                        <br/>
                        You can see my art works by
                        clicking the <button className='bubble-btn'><p>button</p></button></p>
                </button>
                <img src={artImg} alt=""/>
            </div>

        </section>
    );
};

export default MyArt;