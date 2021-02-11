import React, { useContext } from 'react';
import SettingsContext from '../../shared/SettingsContext';
import './style.css'

function MemoryCard(props) {
    const {cardBackground} = useContext(SettingsContext);

    return (
        <div className="c-memory-card">
            <img src={cardBackground} alt="Memory Card Background"/>
        </div>
    );
}

export default MemoryCard;