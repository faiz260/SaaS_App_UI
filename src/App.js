import React, { Suspense, lazy } from "react";
import "./App.css";
import Backdrop from "./backdrop";
const Home = lazy(() => import("./components/home/home"));
const Navbar = lazy(() => import("./components/navbar/navbar"));
const Services = lazy(() => import("./components/services/services"));
const About = lazy(() => import("./components/about/about"));
const FeatureTabs = lazy(() => import("./components/featureTabs/featureTabs"));
const Plan = lazy(() => import("./components/plan/plan"));
const Team = lazy(() => import("./components/team/team"));
const Footer = lazy(() => import("./components/footer/footer"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Backdrop />}>
        <Navbar />
        <Home />
        <Services />
        <About />
        <FeatureTabs />
        <Plan />
        <Team />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
