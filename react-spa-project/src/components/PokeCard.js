import { render } from "@testing-library/react"


const PokeCard = ({ data }) => {

    const renderStats = data.stats.map((stat, i) => {
        return(
            <li key={i}>{stat.stat.name}: {stat.base_stat}</li>
        )
    })

    const renderTypes = data.types.map((type, i) => {
        return(
            <li key={i}>{type.type.name}</li>
        )
    })

    

    return(
        <div className="Wrapper">
            <div className="Card">
                <h1>{data.name}</h1>
                <h4>Pokedex Id: {data.id}</h4>
                <div>
                <img src={data.sprites.front_default} alt={data.species.name}></img>
                <img src={data.sprites.front_shiny} alt={data.species.name}></img>
                </div>
                <div>
                    <h4>Type:</h4>
                    {renderTypes}
                </div>

            </div>
            <ul>
                    <h4>Stats</h4>
                    {renderStats}
            </ul>
        </div>

    )
}

export default PokeCard