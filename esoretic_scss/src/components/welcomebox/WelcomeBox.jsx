import './welcomebox.scss'
// home page 的欢迎框组件
function WelcomeBox() {
    return (
        <div className="welcomeBox">
            <div className="left">
                Welcome Back, Seager 🙋
            </div>
            <div className="right">
                <a href="/user-guide.pdf" target="_blank" rel="noopener noreferrer">
                {/* target="_blank"：在新标签页中打开链接 */}
                {/* rel="noopener noreferrer"：安全属性，防止新打开的页面获得对原始页面的访问权 */}
                    Here is an User Guide for you!  📖
                </a>
            </div>

        
        </div>
    )
}

export default WelcomeBox