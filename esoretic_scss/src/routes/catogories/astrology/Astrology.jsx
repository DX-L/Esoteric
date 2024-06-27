import './astrology.scss'
import GigList from '../../../components/giglist/GigList'


function AstrologyPage() {
    return (
        <div className="astrology">
            <div className="recommend">
                <span>
                    Astrology Posts you may like
                </span>
                <div className="gigs-Recommend">
                    
                    <GigList category="Astrology"/> 
                    
                </div>
            </div>
        </div>
    )
}

export default AstrologyPage