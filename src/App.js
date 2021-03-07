import './App.css';
import Banner from './Banner';
import movieRequests from './movie-request';
import MovieRow from './MovieRow'
import Navbar from './Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <MovieRow title="Trending" url={movieRequests.trending} isLargeRow/>
      <MovieRow title="Netflix Originals" url={movieRequests.netflixOrginals}/>
      <MovieRow title="Top Rated" url={movieRequests.topRated}/>
      <MovieRow title="Action Movies" url={movieRequests.actionMovies}/>
      <MovieRow title="Comedy Movies" url={movieRequests.comedyMovies}/>
      <MovieRow title="Horror Movies" url={movieRequests.horrorMovies}/>
      <MovieRow title="Romance Movies" url={movieRequests.romanceMovies}/>
      <MovieRow title="Documentaries" url={movieRequests.documentries}/>
    </div>
  );
}

export default App;
