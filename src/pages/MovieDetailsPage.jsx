import { Suspense, useEffect, useRef, useState } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'components/API/api-be';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import GoBack from 'components/GoBack/GoBack';
import { toast } from 'react-toastify';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  const backLinkRef = useRef(backLink);

  useEffect(() => {
    const abortController = new AbortController();

    const getDetails = async (id, abortController) => {
      try {
        const result = await getMovieDetails(id, abortController);
        setDetails(result.data);
      } catch (error) {
        if (error.message !== 'canceled') toast.error(error.message);
      }
    };

    getDetails(movieId, abortController);

    return () => {
      abortController.abort();
    };
  }, [movieId]);

  return (
    <main>
      {details && (
        <div>
          <GoBack to={backLinkRef.current} />
          <MovieDetails details={details} />
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </main>
  );
};

export default MovieDetailsPage;
