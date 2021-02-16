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

    useEffect(() => {
        const faceUpNotMached = cards.filter(card => card.faceUp && !card.matched);
        if (faceUpNotMached.length > 1) {
            setTimeout(() => {
                const cardsClone = [...cards];
                faceUpNotMached.forEach(card => {
                    const index = cards.indexOf(card);
                    const cardClone = {...cards[index]};
                    cardClone.faceUp = false;
                    cardsClone[index] = cardClone;
                })
                setCards(cardsClone);
            }, 2000);
        }
    }, [cards])

    function cardClicked(index) {
        const faceUpNotMached = cards.filter(card => card.faceUp && !card.matched);

        if (faceUpNotMached.length > 1) {
            // do nothing
        } else if (cards[index].matched) {
            // do nothing
        } else {
            const cardsClone = [...cards];
            const cardClone = {...cards[index]};
            cardClone.faceUp = !cardClone.faceUp;
            cardsClone[index] = cardClone;

            if (faceUpNotMached.length === 1) {
                // this is the 2nd card checking for a match
                if (cardClone.id === faceUpNotMached[0].id) {
                    cardClone.matched = true;
                    const firstCardIndex = cards.indexOf(faceUpNotMached[0]);
                    const firstCardClone = {...cards[firstCardIndex]};
                    firstCardClone.matched = true;
                    cardsClone[firstCardIndex] = firstCardClone;
                }
            }

            setCards(cardsClone);
        }

        // checking if there is a match


        // const cardsClone = [...cards];
        // const cardClone = {...cards[index]};
        // cardClone.faceUp = !cardClone.faceUp;
        // cardsClone[index] = cardClone;
        // setCards(cardsClone);
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