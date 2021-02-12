import { useState } from 'react';
import './App.css';
import MemoryCard from './components/MemoryCard';
import SettingsContext from './shared/SettingsContext';
import cardBackgroundImg from './assets/images/backgrounds/background-square-card.jpg'
import inbar1Img from './assets/images/foregrounds/inbar-1.jpg'
import roni1Img from './assets/images/foregrounds/roni-1.jpg'
import MemoryGame from './components/MemoryGame';

function App() {
  const [settings, setSettings] = useState({
    cardBackgroundImg
  });

  const cardImgs = [inbar1Img, roni1Img];


  return (
    <SettingsContext.Provider value={settings}>
      <div className="App">
        <MemoryGame cardImgs={cardImgs}/>
      </div>
    </SettingsContext.Provider>
  );
}

export default App;
