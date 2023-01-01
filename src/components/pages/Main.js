import './main.css';
import 'boxicons'
import Header from "../home-page/header/Header";
import Welcome from "../home-page/welcome/Welcome";
import About from "../home-page/about/About";
import University from "../home-page/university/University";
import Work from "../home-page/work/Work";
import Skills from "../home-page/skills/Skills";
import MyArt from "../home-page/art/MyArt";
import ContactMe from "../home-page/contact/ContactMe";
import Footer from "../home-page/footer/Footer";



function Main() {
    return (
        <div className="Main">
            <Header/>
            <Welcome/>
            <About/>
            <University/>
            <Work/>
            <Skills/>
            <MyArt/>
            <ContactMe/>
            <Footer/>
        </div>
    );
}

export default Main;