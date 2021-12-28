import "./App.css";
import LightArtsy from "./LightArtsy";
import { HashRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <ScrollToTop />
        <LightArtsy></LightArtsy>
      </HashRouter>
    </div>
  );
}

export default App;
