import { useState } from "react";

export default function Player({initialName, symbole, isActive, onChangeName}){
    const [playerName, setplayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick(){
        setIsEditing((editing) => !editing);
        if(isEditing){
            onChangeName(symbole, playerName);
        }
    }

    function handleChange(event){
        setplayerName(event.target.value);
    }

    let editplayerName = <span className="player-name">{playerName}</span>
    let btnCaption = 'Edit'

    if(isEditing){
        editplayerName = (<input type="text" required value={playerName} onChange={handleChange}/>);
        btnCaption = 'Save'
    }


    return(
        <li className={isActive ? 'active' : undefined}>
            <span className="player">

                {editplayerName}
                
                <span className="player-symbole">{symbole}</span>

                <button onClick={handleEditClick}>{btnCaption}</button>

            </span>
          </li>

    );
}