import './App.css';
import LightArtsy from './LightArtsy'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LightArtsy></LightArtsy>
      </BrowserRouter>
    </div >
  );
}

export default App;
