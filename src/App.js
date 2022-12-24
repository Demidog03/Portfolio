import './app.css';
import './components/header/header.css'
import Header from "./components/header/Header";
import Welcome from "./components/welcome/Welcome";
import About from "./components/about/About";


function App() {
  return (
    <div className="App">
        <Header/>
        <Welcome/>
        <About/>
    </div>
  );
}

export default App;
