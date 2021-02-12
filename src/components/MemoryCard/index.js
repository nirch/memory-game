import React, { useContext } from 'react';
import SettingsContext from '../../shared/SettingsContext';
import './style.css'

function MemoryCard(props) {
    const {card, onClick} = props;
    const {cardBackgroundImg} = useContext(SettingsContext);
    
    const faceClass = card.faceUp ? "up" : "down";

    return (
        <div className={'c-memory-card ' + faceClass} onClick={() => onClick()}>
            <div className="card-inner">
                <div className="card-face-down">
                    <img src={cardBackgroundImg} alt="Memory Card Face Down"/>
                </div>
                <div className="card-face-up">
                    <img src={card.img} alt="Memory Card Face Up"/>
                </div>
            </div>
        </div>
    );
}

export default MemoryCard;