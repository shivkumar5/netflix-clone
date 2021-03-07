import React, {useState, useEffect} from 'react'
import fetch from './fetch';
import movieRequests from './movie-request'
const IMG_BASE_URL = 'https://image.tmdb.org/t/p/original';

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(()=>{
    async function fetchMovies() {
      const res = await fetch(movieRequests.netflixOrginals);
      setMovie(res.results[Math.floor(Math.random()*res.results.length-1)]);
      console.log(res.results[5])
      return res;
    }
    fetchMovies();
  },[movieRequests.trending])

  function truncateString(str, n) {
    return str?.length > n? str.substr(0,n-1) + " ...": str;
  }
  return (
    <header className="banner" style={{
      backgroundImage:`url(${IMG_BASE_URL}${movie?.backdrop_path})`,
      backgroundSize:'cover',
      backgroundPosition:'center center'
      }}>
      <div className="banner__content">
        <h1 className="banner__title">{movie?.name || movie?.title}</h1>
        <button className="banner__btn">Play</button>
        <button className="banner__btn">My List</button>
        <p className="banner__description">
          {truncateString(movie?.overview, 150)}
        </p>
      </div>
      <div className="banner--fade"/>
    </header>
    
  )
}

export default Banner
