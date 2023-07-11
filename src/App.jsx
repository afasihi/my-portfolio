import Home from "./component/home";
import Work from "./component/work";
import Navbar from "./component/navbar";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Work/>
    </div>
  );
}

export default App;
