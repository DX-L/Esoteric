import './tarot.scss'
import GigList from '../../../components/giglist/GigList'

function TarotPage() {
    return (
        <div className="tarot">
            <div className="recommend">
                <span>
                    Tarot Posts you may like
                </span>
                <div className="gigs-Recommend">
                    
                    <GigList category="Tarot"/> 
                    
                </div>
            </div>
        </div>
    )
}

export default TarotPage