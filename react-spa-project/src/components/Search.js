import Navbar from "./Navbar"
import { useState } from "react"
import TeamList from "./TeamList"


const Search = ({handleSearch, renderPokeCard}) => {
    let [searchTerm, setSearchTerm] = useState('')

    return(
        <div>
            <Navbar/>
            <TeamList/>
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