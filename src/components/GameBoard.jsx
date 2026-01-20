import {useState} from 'react';

const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
];

export default function GameBoard({onSelectSquar, activePlayerSymbole}){
    const[GameBoard, setGameBoard] = useState(initialGameBoard);

    function handleGameBoard(rowIndex,colIndex){
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = activePlayerSymbole;
            return updatedBoard;
        })
    onSelectSquar();
    }
    
return(
        <ol id="game-board">
            {/*עובר על התוכן של הלוח ההתחלתי ומכניס בתוך row את המערך הראשון השני והשלישי כך שעכשיו אפשר לגשת לתוכן שבתוך המשבצות*/}
            {GameBoard.map((row, rowIndex) => 
            <li key={rowIndex}>
                <ol>
                    {/*עובר על השורה - שזה בעצם מערך ושם בכל תא את הסימן של השחקן*/}
                    {row.map((playerSymbol,colIndex) => 
                    <li key={colIndex}>
                        {/*כפתור שכשנילחץ עליו נראה את הסימן של השחקן*/}
                        <button onClick={() => handleGameBoard(rowIndex, colIndex)}>{playerSymbol}</button>
                    </li>)}
                </ol>
            </li>
            )}
        </ol>
    );
}