import './bazi.scss'
import GigList from '../../../components/giglist/GigList'

function BaziPage() {
    return (
        <div className="bazi">
            <div className="recommend">
                <span>
                    Ba Zi Posts you may like
                </span>
                <div className="gigs-Recommend">
                    
                    <GigList category="Bazi"/> 
                    
                </div>
            </div>
        </div>
    )
}

export default BaziPage