import React, { useContext } from 'react';
import SettingsContext from '../../shared/SettingsContext';
import './style.css'

function MemoryCard(props) {
    const {faceDown, faceUpImg} = props;
    const {cardBackgroundImg} = useContext(SettingsContext);
    
    const faceClass = faceDown ? "down" : "up";

    return (
        <div className={'c-memory-card ' + faceClass}>
            <div className="card-inner">
                <div className="card-face-down">
                    <img src={cardBackgroundImg} alt="Memory Card Face Down"/>
                </div>
                <div className="card-face-up">
                    <img src={faceUpImg} alt="Memory Card Face Up"/>
                </div>
            </div>
        </div>
    );
}

export default MemoryCard;