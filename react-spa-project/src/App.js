import './App.css';
import PokeCard from './components/PokeCard';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Berries from './components/Berries';
import Team from './components/Team';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState, useEffect} from 'react' 
import { Fragment } from 'react';

function App() {
  const [data, setData] = useState(null)


  useEffect(() => {
  const API_URL = `https://pokeapi.co/api/v2/pokemon/squirtle`
  const fetchData = async () => {
    const response = await fetch(API_URL)
    const resData = await response.json()
    console.log(resData)
    setData(resData)
  }
    fetchData()
  }, [])

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
              {renderPokeCard()}
            </Fragment>
          }/>
          <Route path='/search' element={<Search/>} />
          <Route path='/berries' element={<Berries/>}/>
          <Route path='/team' element={<Team/>}  />
        </Routes>
      </Router>
    </div>
  );
}

export default App;



