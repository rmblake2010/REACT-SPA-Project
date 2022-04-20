import PokeBallEmpty from '../assets/images/pokeballEmpty.jpg'
import '../App.css'

const TeamList = () => {
    return(
    <div className="team">
        <img className='team-img' src={PokeBallEmpty} alt="team1"></img>
        <img className='team-img' src={PokeBallEmpty} alt="team2"></img>
        <img className='team-img' src={PokeBallEmpty} alt="team3"></img>
        <img className='team-img' src={PokeBallEmpty} alt="team4"></img>
        <img className='team-img' src={PokeBallEmpty} alt="team5"></img>
        <img className='team-img' src={PokeBallEmpty} alt="team6"></img>
    </div>
    )
}

export default TeamList