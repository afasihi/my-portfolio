import Home from "./component/home";
import Work from "./component/work";
import Navbar from "./component/navbar";
import "./App.scss";
import Projects from "./component/projects";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Work />
      <Projects />
    </div>
  );
}

export default App;
