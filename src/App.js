import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { MovieList } from './components/MovieList/movielist';
import { Search } from './components/Search/search';
import { Modale } from './components/Modale/modale';

function App() {

  const [modale, setModale] = useState(false)

  const [search, setSearch] = useState('godfather')

  const url = `https://www.omdbapi.com/?s=${search}&apikey=${process.env.REACT_APP_API_KEY_FILM}`;

  const [film, setFilm] = useState([])


  const funcSearch = (text) => {
      setSearch(text);
  }

  const getFilm = async () => {
    await fetch(url).then((res) => {
      return res.json()
    })
    .then(film => {
      setFilm(film.Search);
    })
  }

  useEffect(() => {
    getFilm();
    console.log(url)
  },[search])


  return (
    <div className="App">
      {
        modale ? 
          <Modale />
      :
      null
      }
      <header className="App-header">
        <div className="col-lg-6">
          <h1>MY MOVIES</h1>
        </div>
        <div className="col-lg-6">
          <Search text={funcSearch}/>
        </div>
      </header>
      <div className="container">
        <div className="row">
        {film ? film.map((a) => 
          <MovieList films={a} />
          ) : <h1>Nessun risultato trovato</h1> }
        </div>
      </div>
    </div>
  );
}

export default App;
