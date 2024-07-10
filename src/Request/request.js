
const APY_KEY = '81844060c1f72da787faf4a915519704';

 const request = {
    fetchTrending : `/trending/all/week?api_key=${ APY_KEY }&language-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${ APY_KEY }&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${ APY_KEY }&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${ APY_KEY }&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${ APY_KEY }&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${ APY_KEY }&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${ APY_KEY }&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${ APY_KEY }&with_genres=99`,

}

export default request;

