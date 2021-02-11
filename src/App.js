import { useState } from 'react';
import './App.css';
import MemoryCard from './components/MemoryCard';
import SettingsContext from './shared/SettingsContext';
import cardBackground from './assets/images/background-square-card.jpg'

function App() {
  const [settings, setSettings] = useState({
    cardBackground
  })


  return (
    <SettingsContext.Provider value={settings}>
      <div className="App">
        <MemoryCard/>
      </div>
    </SettingsContext.Provider>
  );
}

export default App;
