import './navbar.scss'
import SearchBar from '../searchbar/SearchBar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiRequest from '../../lib/apiRequest';
import { Link } from 'react-router-dom';


function Navbar() {
    const navigate = useNavigate();
    // 退出登陆
    // const handleLogout = () => {
    //     localStorage.removeItem('user');
    //     window.location.href = '/welcome/signin';
    // }
    const handleLogout = async () => {
        try {
            const res = await apiRequest.get('/auth/logout');
            console.log(res.data);
            localStorage.removeItem('user'); // 清除本地存储的用户信息
            navigate('/welcome/signin');
        }
        catch (error) {
            console.log(error);
        }
    };
    // menu 用来控制菜单的显示与隐藏（小屏幕）
    const [menu, setMenu] = useState(false);
    
    return (
        <nav>
            <div className="menuIcon" onClick={()=>setMenu((prev)=>!prev)}>
                    <img src="/icons8-menu-64.png" alt="menu" />
            </div>
            <div className={menu ? "menu active" : "menu"}>
                <a href='/home'>Home</a>
                <a href='/'>Notification</a>
                <a href='/'>Mail Box</a>
                <a href='/favorite'>Liked</a>
                <button onClick={handleLogout}>Log Out</button>

            </div>
            <div className="left">
                
                <div className="logo">
                    <a href='/home'>
                        <img src="/logo_transparent.png" alt="logo" />
                    </a>

                </div>
                <div className="searchbar">
                    <SearchBar />
                </div>
            </div>


            <div className="icons">
                <Link to="/">
                    <img src="/icons8-notification-64.png" alt="heart" />
                </Link>

                <Link to="/favorite">
                    <img src="/icons8-mail-64.png" alt="heart" />
                </Link>
                
                <Link to="/favorite">
                    <img src="/icons8-heart-64.png" alt="heart" />
                </Link>
            </div>
            <div className="order">
                <span>
                    Order
                </span>
            </div>
            <div className="switch">
                <span>
                    Switch to selling
                </span>
            </div>
            <div className="avatar">
                {/* <img src="/icons8-user-96.png" alt="avatar" /> */}
                <img src="/seager.png" alt="" />
            </div>
        </nav>

    )
}

export default Navbar;