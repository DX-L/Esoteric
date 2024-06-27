import './gig.scss'
import { Link } from 'react-router-dom'
// import { gigsData } from '../../lib/dummydata'

function Gig() {
    // const data = gigsData;
    return (
        <div className="gigContainer">

            <div className="gigImg">
                <img src="https://images.unsplash.com/photo-1716724839791-d446b058c68d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D" alt="gig" />
            </div>

            <div className="gigDetail">

                <div className="gigTitle">Personal Astrology Reading</div>

                <div className="gigUser">
                    <div className="gigAvatar">
                        <img src="/seager.png" alt="Seager" />
                        <span>Seager</span>
                    </div>
                    <div className="gigRate">
                        🌟4.5
                    </div>
                </div>

                <div className="gigDescription">
                    <p>
                        I will provide you with a detailed astrology reading that will help you understand your past, present, and future.
                        I will provide you with a detailed astrology reading that will help you understand your past, present, and future.
                    </p>
                </div>

                <div className="gigPrice">
                    From AUD $50
                </div>
            </div>

        </div>
    )

}

export default Gig