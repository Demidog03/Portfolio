import React from 'react';
import './welcome.css'
const gojoImage = require('../../../assets/images/GojoBrutalWithBG1.png')
const vector = require('../../../assets/images/welcome-vector.png')

const Welcome = () => {
    return (
        <section className={"welcome flex-space-btw"}>
            <img className={"welcome-img"} src={gojoImage} alt=""/>
            <div className="welcome-text">
                <div className="welcome-text-wrapper flex-vertical-space">
                    <div className="welcome-text-heading flex-center">
                        <h1>Greetings!</h1><button className='frontend-icon'>Front-end</button>
                    </div>
                    <h2>My name is Olzhas!</h2>
                    <p>I am beginner front-end developer</p>
                    <a href="https://drive.google.com/drive/folders/1z0ukEm5ifJfPPlizfJT_jrF_nf3fpjDL?usp=share_link"><button className='cv-button'>Download CV <i className='bx bxs-download'></i></button></a>
                    <button className="welcome-bubble">
                        <h3>
                            I am ready to unleash <br/>
                            my full potential!
                        </h3>
                        <img src={vector} alt=""/>
                    </button>
                </div>
            </div>

        </section>
    );
};

export default Welcome;