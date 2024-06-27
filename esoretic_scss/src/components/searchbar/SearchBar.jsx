//这是导航栏的搜索框组件
import './searchbar.scss'

function SearchBar() {
    return (
        <form className='searchbar'>
            <input className='search' type='search' placeholder='What service are you looking for today?' />
            <button>
                <img src='/icons8-search-64.png' alt='search' />
            </button>
        </form>
    )
}

export default SearchBar