import './cardlist.scss'

import Card from '../card/Card'
import { gigsData } from "../../lib/dummydata"
// import { useRef, useState, useEffect } from 'react'

function CardList() {
    return (
        <div className="cardlist">
            {gigsData.map(gig => (
                <Card key={gig.id} item={gig} />
            ))}
        </div>
    );

}

export default CardList;