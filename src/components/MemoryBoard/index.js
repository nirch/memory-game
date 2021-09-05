import { calcSide } from '../../shared/utils';
import './style.css'

export default () => {


    const cardNum = 12;
    const height = 750;
    const width = 1000;
    const {cardSize, rows, columns, yGutters, xGutters} = calcSide(width, height, cardNum);

    const boardStyle = {
        width: width + "px",
        height: height + "px",
        backgroundColor: "red"
    }
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
    console.log(boardStyle);

    let cards = [];
    for (let i = 0; i < cardNum; i++) {
        cards.push(<div className="card"></div>)
    }

    return (
        <div className="c-memory-board" style={boardStyle}>
            {cards}
        </div>
    )
}