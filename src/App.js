import './app.css';
import './components/home-page/header/header.css'
import 'boxicons'
import Header from "./components/home-page/header/Header";
import Welcome from "./components/home-page/welcome/Welcome";
import About from "./components/home-page/about/About";
import University from "./components/home-page/university/University";
import Work from "./components/home-page/work/Work";
import Skills from "./components/home-page/skills/Skills";
import MyArt from "./components/home-page/art/MyArt";
import ContactMe from "./components/home-page/contact/ContactMe";
import Footer from "./components/home-page/footer/Footer";


function App() {
  return (
    <div className="App">
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

export default App;
