import './App.css';
import PokeCard from './components/PokeCard';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Berries from './components/Berries';
import Team from './components/Team';
import TeamList from './components/TeamList';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState, useEffect} from 'react' 
import { Fragment } from 'react';

function App() {
  let [search, setSearch] = useState('')
  const [data, setData] = useState(null)
  let [team, setTeam] = useState([])

  //Searching for pokemon
  useEffect(() => {
    //Renders Pokemon Card for home page if no pokemon has been searched
  const handleAPISearch = () => {
    if(search === ''){
      return `https://pokeapi.co/api/v2/pokemon/pikachu`
    }else{
      return `https://pokeapi.co/api/v2/pokemon/${search}`
    }
  }
  const fetchData = async () => {
    const response = await fetch(handleAPISearch())
    const resData = await response.json()
    console.log(resData)
    setData(resData)
  }
    fetchData()
  }, [search])

  //Function to handle searching, will pass down to Search
  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
  }



  // Function to render component w/ API data. Needed to wait for useEffect fetch before rendering
  const renderPokeCard = () => {
    if(data){
      return(
          <PokeCard data={data} />
      )
    }
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={
            <Fragment>
              <Navbar/>
              <TeamList/>
              {renderPokeCard()}
            </Fragment>
          }/>
          <Route path='/search' element={<Search handleSearch={handleSearch} renderPokeCard={renderPokeCard}/>} />
          <Route path='/berries' element={<Berries/>}/>
          <Route path='/team' element={<Team/>}  />
        </Routes>
      </Router>
    </div>
  );
}

export default App;



