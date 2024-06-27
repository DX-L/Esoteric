import './ziwei.scss'
import GigList from '../../../components/giglist/GigList'

function ZiweiPage() {
    return (
        <div className="ziwei">
            <div className="recommend">
                <span>
                Zi Wei Dou Shu Posts you may like
                </span>
                <div className="gigs-Recommend">
                    
                    <GigList category="Zi Wei Dou Shu"/> 
                    
                </div>
            </div>
        </div>
    )
}

export default ZiweiPage