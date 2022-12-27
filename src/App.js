import './app.css';
import './components/header/header.css'
import 'boxicons'
import Header from "./components/header/Header";
import Welcome from "./components/welcome/Welcome";
import About from "./components/about/About";
import University from "./components/university/University";
import Work from "./components/work/Work";

function App() {
  return (
    <div className="App">
        <Header/>
        <Welcome/>
        <About/>
        <University/>
        <Work/>
    </div>
  );
}

export default App;
