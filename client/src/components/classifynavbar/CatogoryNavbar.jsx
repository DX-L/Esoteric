import './catogorynavbar.scss'

function CatogoryNavbar() {
    return (
        <div className="catogorynavbar">
            {/* 风水 */}
            <div className="fengshui">
                <a href="/catogories/fengshui">Feng Shui</a>
            </div>
            {/* 星盘 */}
            <div className="astrology">
                <a href="/catogories/astrology">Astrology</a>
            </div>
            {/* 塔罗 */}
            <div className="tarot">
                <a href="/catogories/tarot">Tarot</a>
            </div>
            {/* 紫薇 */}
            <div className="ziwei">
                <a href="/catogories/ziwei">Zi Wei Ba Dou</a>
            </div>
            {/* 八字 */}
            <div className="bazi">
                <a href="/catogories/bazi">Ba Zi</a>
            </div>
            {/* 心理分析 */}
            <div className="psychology">
                <a href="/catogories/psyc">Psychology</a>
            </div>
            
        </div>
    )
}

export default CatogoryNavbar