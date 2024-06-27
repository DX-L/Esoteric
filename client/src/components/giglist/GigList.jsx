import './giglist.scss'
import Gig from "../gig/Gig"
import { gigsData } from "../../lib/dummydata"
import { useRef, useState, useEffect } from 'react'

function List({ category}) {
    const gigListRef = useRef(null);
    const [scrollWidth, setScrollWidth] = useState(1000); // 初始滚动宽度，稍后会根据屏幕大小动态调整

    useEffect(() => {
        const updateScrollWidth = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 768) {
                setScrollWidth(2 * 315);  // 小屏幕，滚动两张卡片的宽度
            } else if (screenWidth >= 768 && screenWidth < 1024) {
                setScrollWidth(3 * 315);  // 中屏幕，滚动三张卡片的宽度
            } else {
                setScrollWidth(4 * 315);  // 大屏幕，滚动四张卡片的宽度
            }
        };

        updateScrollWidth();  // 初次加载时设置滚动宽度
        window.addEventListener('resize', updateScrollWidth);  // 监听窗口尺寸变化
        
        // 清理函数
        return () => {
            window.removeEventListener('resize', updateScrollWidth);
        };
    }, []);

    const handleScrollLeft = () => {
        if (gigListRef.current) {
            gigListRef.current.scrollBy({ left: -scrollWidth, behavior: 'smooth' });
        }
    };

    const handleScrollRight = () => {
        if (gigListRef.current) {
            gigListRef.current.scrollBy({ left: scrollWidth, behavior: 'smooth' });
        }
    };

    const [favorites, setFavorites] = useState([]);
    const filteredGigs = category ? gigsData.filter(item => item.category === category) : gigsData;

    const addToFavorites = (gig) => {
        if (!favorites.includes(gig)) {
            setFavorites([...favorites, gig]);
        }
    };

    return (
        <div className="listContainer">
            <button className="scroll-button" onClick={handleScrollLeft}>
                <img src="/arrow.png" alt="Left Arrow" />
            </button>
            <div className='giglist' ref={gigListRef}>
                {filteredGigs.map(item => (
                    <Gig key={item.id} item={item} onAddToFavorites={addToFavorites}/>
                ))}
            </div>
{/* 这一部分之后再做，做favorites功能时再解开注释
            <div className="favorites">
                <h2>Favorites</h2>
                {favorites.map((item) => (
                    <Gig key={item.id} item={item} />
                ))}
            </div> */}
            <button className="scroll-button" onClick={handleScrollRight}>
                <img className='right' src="/arrow.png" alt="Right Arrow" style={{ transform: 'rotate(180deg)' }} />
            </button>
        </div>
    )
}

export default List
