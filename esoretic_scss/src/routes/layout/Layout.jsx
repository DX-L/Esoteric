// 管理页面的样式
import './layout.scss'
import Navbar from '../../components/navbar/Navbar.jsx'
import CatogoryNavbar from '../../components/classifynavbar/CatogoryNavbar.jsx'
import { Outlet} from "react-router-dom" 

function Layout() {
    return (
        <div className="layout">
            <div className="navbar">
                <Navbar/>
            </div>
            <div className="catogory">
                <CatogoryNavbar/>
            </div>
            <div className="content">
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout