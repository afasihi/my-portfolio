import Home from "./component/home";
import Navbar from "./component/navbar";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
