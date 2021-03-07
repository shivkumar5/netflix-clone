const API_KEY = '69a63a34c1f039ae3a0543d670305443';

const movieRequests = {
  trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  netflixOrginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  topRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US&with_genres=28`,
  actionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  comedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  horrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  romanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  documentries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default movieRequests;