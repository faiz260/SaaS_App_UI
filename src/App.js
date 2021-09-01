import "./App.css";
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";
import Services from "./components/services/services";
import About from "./components/about/about";
import FeatureTabs from "./components/featureTabs/featureTabs";
import Plan from "./components/plan/plan";
import Team from "./components/team/team";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
      <About />
      <FeatureTabs />
      <Plan />
      <Team />
    </div>
  );
}

export default App;
