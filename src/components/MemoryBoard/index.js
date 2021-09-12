import { calcSide, shuffleArray } from '../../shared/utils';
import './style.css'
import { useEffect, useState } from 'react';
import MemoryCard from '../MemoryCard';
import confetti from 'canvas-confetti';

export default ({width, height, cardImgs}) => {
    const [cards, setCards] = useState([]);
    const {cardSize, rows, columns, yGutters, xGutters} = calcSide(width, height, cardImgs.length * 2);

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
        if (cards.length > 0) {
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
            } else if (cards.filter(card => card.matched).length === cards.length) {
                // all matched - GAME OVER
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            }
        }
    }, [cards])

    const boardStyle = {}
    if (yGutters) {
        boardStyle.paddingTop = yGutters;
        boardStyle.paddingBottom = yGutters;
    }
    if (xGutters) {
        boardStyle.paddingLeft = xGutters;
        boardStyle.paddingRight = xGutters;
    }

    let templateColumns = "";
    for (let i = 0; i < columns; i++) {
        templateColumns += cardSize + "px ";
    }    
    boardStyle.gridTemplateColumns = templateColumns;

    let templateRows = "";
    for (let i = 0; i < rows; i++) {
        templateRows += cardSize + "px ";
    }    
    boardStyle.gridTemplateRows = templateRows;

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




    return (
        <div className="c-memory-board" style={boardStyle}>
            {cards.map((card, index) => 
                <MemoryCard card={card} onClick={() => cardClicked(index)}/>
            )}
        </div>
    )
}