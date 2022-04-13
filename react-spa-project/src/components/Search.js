import Navbar from "./Navbar"
import { useState } from "react"


const Search = ({handleSearch, renderPokeCard}) => {
    let [searchTerm, setSearchTerm] = useState('')

    return(
        <div>
            <Navbar/>
            <div>
                <form onSubmit={(e) => handleSearch(e, searchTerm)}>
                    <input 
                        type='text' placeholder="Search for a Pokemon!"
                        onChange={(e) => {setSearchTerm(e.target.value)}}/>
                    <button type="submit">Search!</button>
                </form>
                {renderPokeCard()}
            </div>
        </div>
    )
}

export default Search