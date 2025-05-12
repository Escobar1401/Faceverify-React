import './Searchbutton.css'
import searchIcon from '../assets/search.svg'

function SearchButton() {
    return (
        <div className="SearchButton">
            <img src={searchIcon} alt="icon" />
        </div>
    )
}

export default SearchButton