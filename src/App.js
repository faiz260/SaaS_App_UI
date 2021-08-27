import "./App.css";
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";
import Services from "./components/services/services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
    </div>
  );
}

export default App;
