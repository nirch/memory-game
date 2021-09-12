import { shuffleArray } from "./utils";

export default class MemoryGame {
    constructor(images) {
        this.cards = [];
        this.moves = 0;

        // for each image creating 2 cards (they are the pairs)
        images.forEach((img, index) => {
            this.cards.push(new MemoryCard(index, img));
            this.cards.push(new MemoryCard(index, img));
        });

        shuffleArray(this.cards);
    }

    cardClicked(index) {
        const faceUpNotMached = this.cards.filter(card => card.faceUp && !card.matched);
        if (faceUpNotMached.length > 1) {
            // do nothing
            return false;
        } else if (this.cards[index].matched) {
            // do nothing
            return false;
        } else {
            this.cards[index].faceUp = !this.cards[index].faceUp;
            if (faceUpNotMached.length === 1 && this.cards[index].id === faceUpNotMached[0].id) {
                // Match!
                this.cards[index].matched = true;
                faceUpNotMached[0].matched = true;
            }
            return true;
        }
    }
}



class MemoryCard {
    constructor(id, img) {
        this.id = id;
        this.img = img;
        this.faceUp = false;
        this.matched = false;
    }    
}