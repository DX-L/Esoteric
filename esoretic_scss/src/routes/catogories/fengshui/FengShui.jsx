import './fenghsui.scss'
import GigList from '../../../components/giglist/GigList'

function FengShuiPage() {
    return (
        <div className="fengshui">
            <div className="recommend">
                <span>
                    Fengshui Posts you may like
                </span>
                <div className="gigs-Recommend">
                    
                    <GigList category="Feng Shui"/> 
                    
                </div>
            </div>
        </div>
    )
}

export default FengShuiPage