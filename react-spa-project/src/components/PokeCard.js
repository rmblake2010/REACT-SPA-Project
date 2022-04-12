

const PokeCard = ({ data }) => {

    const renderStats = data.stats.map((stat, i) => {
        return(
            <li key={i}>{stat.stat.name}: {stat.base_stat}</li>
        )
    })

    return(
        <div>
            <h1>{data.species.name}</h1>
            <img src={data.sprites.front_default} alt={data.species.name}></img>
            {renderStats}
        </div>
    )
}

export default PokeCard