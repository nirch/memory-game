import React, { useEffect, useMemo, useState } from 'react';
import { shuffleArray } from '../../shared/utils';
import MemoryCard from '../MemoryCard';
import './style.css'


function MemoryGame(props) {
    const {cardImgs} = props;
    const [cards, setCards] = useState([]);


    useEffect(() => {
        // creating 2 cards of the same image. then shuffling the cards
        const cards = [];
        cardImgs.forEach((img, index) => {
            cards.push({id: index, img, matched: false, faceUp: false});
            cards.push({id: index, img, matched: false, faceUp: false});
        });
        shuffleArray(cards);
        setCards(cards);
    }, [cardImgs])


    function cardClicked(index) {
        const cardsClone = [...cards];
        const cardClone = {...cards[index]};
        cardClone.faceUp = !cardClone.faceUp;
        cardsClone[index] = cardClone;
        setCards(cardsClone);
    }

    const cardsView = cards.map((card, index) => 
        <div className="card" key={index}>
            <MemoryCard card={card} onClick={() => cardClicked(index)}/>
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