import { useState } from 'react';
import './App.css';
import MemoryCard from './components/MemoryCard';
import SettingsContext from './shared/SettingsContext';
import cardBackgroundImg from './assets/images/backgrounds/background-square-card.jpg'
import inbar1Img from './assets/images/foregrounds/inbar-1.jpg'

function App() {
  const [settings, setSettings] = useState({
    cardBackgroundImg
  })
  const [cardFaceDown, setCardFaceDown] = useState(true);


  return (
    <SettingsContext.Provider value={settings}>
      <div className="App">
        <div onClick={() => setCardFaceDown(!cardFaceDown)}>
          <MemoryCard faceDown={cardFaceDown} faceUpImg={inbar1Img}/>
        </div>
      </div>
    </SettingsContext.Provider>
  );
}

export default App;
