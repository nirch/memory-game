import React, { useMemo, useState } from 'react';
import { shuffleArray } from '../../shared/utils';
import MemoryCard from '../MemoryCard';
import './style.css'


function MemoryGame(props) {
    const {cardImgs} = props;
    const [faceUps, setFaceUps] = useState({});

    const cards = useMemo(() => {
        // creating 2 cards of the same image. then shuffling the cards
        const cards = [];
        cardImgs.forEach((img, index) => {
            cards.push({id: index, img});
            cards.push({id: index, img});
        });
        shuffleArray(cards);
        return cards;
    }, [cardImgs]);

    function cardClicked(index) {
        // adding or removing the card from the faceUps object
        const faceUpsClone = {...faceUps};
        if (faceUpsClone[index]) {
            // removing
            delete faceUpsClone[index];
        } else {
            // adding
            faceUpsClone[index] = true;
        }
        setFaceUps(faceUpsClone);
    }

    const cardsView = cards.map((card, index) => 
        <div className="card" key={index}>
            <MemoryCard faceDown={!faceUps[index]} card={card} onClick={() => cardClicked(index)}/>
        </div>
    );

    return (
        <div className="c-memory-game">
            <div className="board">
                {cardsView}
            </div>
        </div>
    );
}

export default MemoryGame;