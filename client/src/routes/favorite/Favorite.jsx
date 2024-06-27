import './favorite.scss'
import Gig from '../../components/gig/Gig'
import { useState } from 'react';

function FavoritePage() {
    const [favorites, setFavorites] = useState([]);
    

    const addToFavorites = (gig) => {
        if (!favorites.includes(gig)) {
            setFavorites([...favorites, gig]);
        }
    };
    return (
        <div className="favorite">
            {/* <div className="recommend">
            <div className="favorites">
                <h2>Favorites</h2>
                {favorites.map((item) => (
                    <Gig key={item.id} item={item} />
                ))}
            </div> 
            </div> */}
            {/* 脑子有点糊涂，捋不清逻辑了救命。。。感觉很简单的。。。 */}
        </div>
    )
}

export default FavoritePage
