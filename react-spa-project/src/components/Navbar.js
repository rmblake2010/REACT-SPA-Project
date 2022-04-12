import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <div className="nav">
            <img src="" alt="pokeball"></img>
            <Link to={`/`}><h4>Home</h4></Link>
            <Link to={`/search`}><h4>Search for Pokemon!</h4> </Link>
            
            <Link to={`/berries`}><h4>Berries</h4> </Link>
            <Link to={`/team`}><h4>Your Team</h4> </Link>
        </div>
    )
}

export default Navbar