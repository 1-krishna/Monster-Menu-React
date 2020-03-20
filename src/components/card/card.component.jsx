import React from 'react';
import './card.styles.css';

export const Card = props => {
    return (<div className="card-container">
            <img src={`https://robohash.org/${props.monster.id}?set=set2`} alt={props.monster.name}></img>
            <h4>{props.monster.name}</h4>
            <p>{props.monster.email}</p>
        </div>);
}