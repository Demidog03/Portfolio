import './welcome.css'

const Welcome = () => {
    return (
        <section className='welcome-blog'>
            <div className="overlay flex-center">
                <div className="welcome-text flex-center">
                    <h1>Art Blog</h1>
                    <h2>DemiArt || Otep Olzhas</h2>
                </div>
                <div className="instagram flex-center">
                    <a href="https://www.instagram.com/demiart3/" className='flex-center'><h3>Instagram</h3>
                        <i className='bx bxl-instagram'></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Welcome;