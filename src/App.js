import { useState, useEffect} from 'react';
import "./App.css";
import Moviecard from './components/MovieCard';
import Row from './components/Row/Row';
import requests from './requests';
import Banner from "./components/Banner/Banner";
import Nav from "./components/Nav/Nav";

function App() {
    const API_URL = "https://api.themoviedb.org/3/movie/popular"
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(( response ) => response.json())
            .then(( data => {
                setMovies( data.results )
            }))
    }, [])
  return (
    <div className="App">
        <Nav />
        <Banner fetchURL={requests.fetchNetflixOriginals}/>
        <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isLargeRow />
        <Row title="Trending Now" fetchURL={requests.fetchTrending} />
        <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
        <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
        
    </div>
  );
}

export default App;
