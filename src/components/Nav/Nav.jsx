import SearchBar from "../SearchBar/SearchBar";

import { NavC } from './styledComponents'
import { NavLink } from 'react-router-dom'

const Nav = ({ onSearch }) => {
    return (
        <NavC>
            <SearchBar onSearch = {onSearch} />
            <button>
                <NavLink to = '/About'>About</NavLink>
            </button>
            <button>
                <NavLink to = '/Home'>Home</NavLink>
            </button>

        </NavC>
    )
}

export default Nav;