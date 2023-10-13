import axios from 'axios';

const DEF_PATH_IMAGE = 'http://image.tmdb.org/t/p/';
const DEF_LOGO_SIZE = 'w185';
const DEF_POSTER_SIZE_500 = 'w500';
const DEF_POSTER_SIZE_92 = 'w92';

const API_KEY = '1bf3609f6e493ea82d2487b1da41db26';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const paramsObj = {
  api_key: API_KEY,
};

const getTrending = async abortController => {
  const params = new URLSearchParams(paramsObj);
  return await axios.get(`/trending/movie/day?${params}`, { signal: abortController.signal });
};

const searchMovies = async (title, abortController) => {
  const paramsObjSearch = {
    ...paramsObj,
    query: title,
  };
  const params = new URLSearchParams(paramsObjSearch);
  return await axios.get(`/search/movie?${params}`, { signal: abortController.signal });
};

const getMovieDetails = async (id, abortController) => {
  const params = new URLSearchParams(paramsObj);
  return await axios.get(`/movie/${id}?${params}`, { signal: abortController.signal });
};

const getMovieCredits = async (id, abortController) => {
  const params = new URLSearchParams(paramsObj);
  return await axios.get(`/movie/${id}/credits?${params}`, { signal: abortController.signal });
};

const getMovieReviews = async (id, abortController) => {
  const params = new URLSearchParams(paramsObj);
  return await axios.get(`/movie/${id}/reviews?${params}`, { signal: abortController.signal });
};

const getConfiguration = async () => {
  const params = new URLSearchParams(paramsObj);
  return await axios.get(`/configuration?${params}`);
};

export {
  getTrending,
  searchMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
  getConfiguration,
  DEF_PATH_IMAGE,
  DEF_LOGO_SIZE,
  DEF_POSTER_SIZE_500,
  DEF_POSTER_SIZE_92,
};
