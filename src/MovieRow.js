import React, {useState, useEffect} from 'react'
import YouTube from 'react-youtube';
import fetch from './fetch';
import movieTrailer from 'movie-trailer';
import MoviePoster from './MoviePoster';

function MovieRow({title, url, isLargeRow}) {
  const [movies,setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const IMG_BASE_URL = 'https://image.tmdb.org/t/p/original';
  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch(url);
      setMovies(res.results);
      return res;
    }
    fetchMovies();
  }, [url])

  const startAndPause = (movie) => {
    movieTrailer(movie?.name || movie?.title || "")
    .then(url =>{
      const params = new URLSearchParams(new URL(url).search);
      if(params.get('v') === trailerUrl){
        setTrailerUrl('');
      } else {
        setTrailerUrl(params.get('v'))
      }
    })
    .catch(err => console.log(err))
  }

  const opts = {
    height:'390',
    width:'100%',
    playerVars:{
      autoplay:1
    }
  }
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {
          movies.map((movie)=>{
            return <MoviePoster onPosterClick={()=> startAndPause(movie)} key={movie?.id} title={movie?.name || movie?.title} imgPath={IMG_BASE_URL+movie?.poster_path} isLargeRow={isLargeRow}/>
          })
        }
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  )
}

export default MovieRow
