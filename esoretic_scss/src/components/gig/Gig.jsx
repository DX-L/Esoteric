import React, { useState } from 'react';
import './gig.scss';

function Gig({ item, onAddToFavorites }) {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleLikeClick = () => {
        setIsFavorite(!isFavorite);
        onAddToFavorites(item);
    };

    return (
        <div className="gigContainer">
            <div className="gigImg">
                <img src={item.image} alt="gig" />
                <div className={`likeIcon ${isFavorite ? 'liked' : ''}`} onClick={handleLikeClick}>
                    <img src="/star-svgrepo-com.svg" alt="" />
                </div>
                {/* 这部分之后做favorite page时再做 */}
            </div>

            <div className="gigDetail">
                <div className="gigTitle"> {item.title}</div>
                <div className="gigUser">
                    <div className="gigAvatar">
                        <img src="/seager.png" alt="Seager" />
                        <span>{item.sellerName}</span>
                    </div>
                    <div className="gigRate">
                        🌟 {item.rating}
                    </div>
                </div>
                <div className="gigDescription">
                    <p>{item.description}</p>
                </div>
                <div className="gigPrice">
                    From AUD ${item.price}
                </div>
            </div>
        </div>
    );
}

export default Gig;
