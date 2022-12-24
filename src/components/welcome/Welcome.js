import React from 'react';
import './welcome.css'
const gojoImage = require('../../assets/images/GojoBrutalWithBG1.png')
const bubble = require('../../assets/bubbles/bubble1.png')


const Welcome = () => {
    return (
        <section className={"welcome flex-space-btw"}>
            <img className={"welcome-img"} src={gojoImage} alt=""/>
            <div className="welcome-text">
                <div className="welcome-text-wrapper flex-vertical-space">
                    <div className="welcome-text-heading flex-center">
                        <h1>Greetings!</h1><button>Front-end</button>
                    </div>
                    <h2>My name is Olzhas!</h2>
                    <p>I am beginner front-end developer</p>
                </div>
            </div>
            <div className={"welcome-bubble"}>
                <img src={bubble} alt=""/>
                <h3>
                    I am ready to unleash <br/>
                    my full potential!
                </h3>
            </div>
        </section>
    );
};

export default Welcome;