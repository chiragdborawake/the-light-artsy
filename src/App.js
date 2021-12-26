import "./App.css";
import LightArtsy from "./LightArtsy";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <LightArtsy></LightArtsy>
      </BrowserRouter>
    </div>
  );
}

export default App;
