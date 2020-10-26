import React, { useState } from 'react';
import './App.css';

function Fiche(props) {
    const [isBlue, setBlue] = useState(false);

    const increment = () => {
        setBlue(!isBlue);
    };

    return(
        <div className="fiche">
            <img src={props.image}></img>
            <h2 class={isBlue ? "blue" : ""}>{props.title}</h2>
            <p>{props.date}</p>
            <p>{props.description}</p>
            <button onClick={increment}>Changer la couleur</button>
        </div>
    )
}

export default Fiche