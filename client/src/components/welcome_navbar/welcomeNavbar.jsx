import './welnavbar.scss'

function WelcomeNavbar() {
    return (
        <nav>
            <div className="leftNav">
                <div className="logo">
                    <a href='/welcome/signin'>
                        <img src="/logo_transparent.png" alt="logo" />
                        {/* 这里应该再加个事件监听器，当在小屏幕时，点击logo导向explore的页面 */}
                    </a>
                </div>
            </div>

            <div className="rightNav">

                <a href="/welcome/explore" className='explore'>Explore</a>
                <div className="language">
                    <a href="/">EN</a>

                    <a href="/">KR</a>
                </div>
                <a href="/welcome/signupCounselor" className='beCounselor'>Become A Counselor</a>
                <a href='/welcome/signin'>Sign In</a>
                <a href='/welcome/signup' className='join'>
                    <p>
                        Join</p>
                </a>
            </div>
        </nav>
    )
}

export default WelcomeNavbar