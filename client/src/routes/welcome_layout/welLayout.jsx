import { Outlet} from "react-router-dom" 
import './wellayout.scss'
import WelNavbar from '../../components/welcome_navbar/welcomeNavbar.jsx'

function WelLayout() {
    return (
        <div className="wellayout">
            <div className="navbar">
                <WelNavbar/>
            </div>
            <div className="content">
                <Outlet/>
            </div>
        </div>
    )
}

export default WelLayout