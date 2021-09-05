import { useRef, useState } from 'react';
import './App.css';
import SettingsContext from './shared/SettingsContext';
import cardBackgroundImg from './assets/images/backgrounds/background-square-card.jpg'
import MemoryGame from './components/MemoryGame';
import MemoryBoard from './components/MemoryBoard';
import { useResizeDetector } from 'react-resize-detector';


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
  const boardRef = useRef(null);
  const { width, height, ref } = useResizeDetector();

  const boardDimensions = {};
  if (width && boardRef && boardRef.current) {
    boardDimensions.width = width;
    boardDimensions.height = window.innerHeight - boardRef.current.getBoundingClientRect().y;
    console.log(boardDimensions);
  }

  return (
    <SettingsContext.Provider value={settings}>
      <div className="App" ref={ref}>
        {/* <h1>Memory Game</h1> */}
        {/* <MemoryGame cardImgs={images}/> */}

        <div className="boardContainer" ref={boardRef}>
          {boardDimensions.height ? 
            <MemoryBoard width={boardDimensions.width} height={boardDimensions.height} cardNum={18}/> : 
            null
          }
        </div>
      </div>
    </SettingsContext.Provider>
  );
}

export default App;
