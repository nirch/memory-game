import React, { useContext } from 'react';
import SettingsContext from '../../shared/SettingsContext';
import './style.css'

function MemoryCard(props) {
    const {faceDown, faceUpImg} = props;
    const {cardBackground} = useContext(SettingsContext);

    return (
        <div className="c-memory-card">
            <div class="img-container">
                <img src={faceDown ? cardBackground: faceUpImg} alt="Memory Card Background"/>
            </div>
        </div>
    );
}

export default MemoryCard;