import React, { useState } from 'react';
import './card.scss';

function Card({item}) {
    // console.log(gigsData);

    return (
        <div className="cardContainer">
            <div className="cardImg">
                <img src={item.image} alt="cardImg" />
                
            </div>

            <div className="cardDetail">
                <div className="cardTitle"> {item.title}</div>
                <div className="cardPrice">
                    From AUD ${item.price}
                </div>
            </div>
        </div>
    );
}

export default Card;
