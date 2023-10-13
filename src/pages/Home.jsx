import { getTrending } from 'components/API/api-be';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const Home = () => {
  const location = useLocation();
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    const getMovies = async abortController => {
      try {
        const result = await getTrending(abortController);
        setTrending(result.data.results);
      } catch (error) {
        if (error.message !== 'canceled') toast.error(error.message);
      }
    };

    getMovies(abortController);

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <main>
      <ul>
        {trending &&
          trending.map(item => (
            <li key={item.id}>
              <Link to={`/movies/${item.id}`} state={{ from: location }}>
                {item.title}
              </Link>
            </li>
          ))}
      </ul>
    </main>
  );
};

export default Home;
