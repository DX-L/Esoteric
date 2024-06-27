import './psyc.scss'
import GigList from '../../../components/giglist/GigList'

function PsycPage() {
    return (
        <div className="psych">
            <div className="recommend">
                <span>
                    Psychological Posts you may like
                </span>
                <div className="gigs-Recommend">
                    
                    <GigList category="Psychology"/> 
                    
                </div>
            </div>
        </div>
    )
}

export default PsycPage
