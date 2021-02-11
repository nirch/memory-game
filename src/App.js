import { useState } from 'react';
import './App.css';
import MemoryCard from './components/MemoryCard';
import SettingsContext from './shared/SettingsContext';
import cardBackground from './assets/images/backgrounds/background-square-card.jpg'
import inbar1Img from './assets/images/foregrounds/inbar-1.jpg'

function App() {
  const [settings, setSettings] = useState({
    cardBackground
  })


  return (
    <SettingsContext.Provider value={settings}>
      <div className="App">
        <MemoryCard faceDown={false} faceUpImg={inbar1Img}/>
      </div>
    </SettingsContext.Provider>
  );
}

export default App;
