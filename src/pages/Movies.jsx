import { searchMovies } from 'components/API/api-be';
import SearchForm from 'components/SearchForm/SearchForm';
import SearchList from 'components/SearchList/SearchList';
import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const Movies = () => {
  const [movies, setMovies] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const onSubmit = searchString => {
    const searchParams = searchString !== '' ? { search: searchString } : {};
    setSearchParams(searchParams);
  };

  useEffect(() => {
    const abortController = new AbortController();
    const searchString = searchParams.get('search');

    if (!searchString) {
      return;
    }

    const searchList = async (searchString, abortController) => {
      try {
        const list = await searchMovies(searchString, abortController);
        setMovies(list.data.results);
      } catch (error) {
        if (error.message !== 'canceled') toast.error(error.message);
      }
    };

    searchList(searchString, abortController);

    return () => {
      abortController.abort();
    };
  }, [searchParams]);

  return (
    <main>
      <SearchForm onSubmit={onSubmit} />
      {movies && <SearchList movies={movies} from={location} />}
    </main>
  );
};

export default Movies;
