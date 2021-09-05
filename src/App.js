import { useState } from 'react';
import './App.css';
import SettingsContext from './shared/SettingsContext';
import cardBackgroundImg from './assets/images/backgrounds/background-square-card.jpg'
import MemoryGame from './components/MemoryGame';
import MemoryBoard from './components/MemoryBoard';


// importing all images from the foregrounds directory
function importAll(r) {
  const images = r.keys().map(item => r(item).default);
  return images;
}
const images = importAll(require.context('./assets/images/foregrounds', false, /\.(png|jpe?g|svg)$/));


function App() {
  const [settings, setSettings] = useState({
    cardBackgroundImg
  });

  return (
    <SettingsContext.Provider value={settings}>
      <div className="App">
        {/* <MemoryGame cardImgs={images}/> */}
        <MemoryBoard/>
      </div>
    </SettingsContext.Provider>
  );
}

export default App;
