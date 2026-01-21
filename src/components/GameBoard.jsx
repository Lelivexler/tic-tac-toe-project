import {useState} from 'react';

export default function GameBoard({onSelectSquar, board}){
    
return(
        <ol id="game-board">
            {/*עובר על התוכן של הלוח ההתחלתי ומכניס בתוך row את המערך הראשון השני והשלישי כך שעכשיו אפשר לגשת לתוכן שבתוך המשבצות*/}
            {board.map((row, rowIndex) => 
            <li key={rowIndex}>
                <ol>
                    {/*עובר על השורה - שזה בעצם מערך ושם בכל תא את הסימן של השחקן*/}
                    {row.map((playerSymbol,colIndex) => 
                    <li key={colIndex}>
                        {/*כפתור שכשנילחץ עליו נראה את הסימן של השחקן*/}
                        <button onClick={()=> onSelectSquar(rowIndex, colIndex)} disabled={playerSymbol !== null} >{playerSymbol}</button>
                    </li>)}
                </ol>
            </li>
            )}
        </ol>
    );
}