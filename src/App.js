import './app.css';
import './components/header/header.css'
import 'boxicons'
import Header from "./components/header/Header";
import Welcome from "./components/welcome/Welcome";
import About from "./components/about/About";
import University from "./components/university/University";
import Work from "./components/work/Work";
import Skills from "./components/skills/Skills";
import MyArt from "./components/art/MyArt";
import ContactMe from "./components/contact/ContactMe";

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
    </div>
  );
}

export default App;
