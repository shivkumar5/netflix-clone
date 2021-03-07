const BASE_URL = 'https://api.themoviedb.org/3';

const fetchMovies = async (url) => {
  const res = await fetch(`${BASE_URL}${url}`)
  return res.json();
}

export default fetchMovies;