import "./App.css";
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";
import Services from "./components/services/services";
import About from "./components/about/about";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
      <About />
    </div>
  );
}

export default App;
