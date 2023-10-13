import { getMovieCredits, DEF_PATH_IMAGE, DEF_POSTER_SIZE_92 } from 'components/API/api-be';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Item } from './Cast.styled';
import { toast } from 'react-toastify';

const Cast = () => {
  const [cast, setCast] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    const getCast = async (id, abortController) => {
      try {
        const result = await getMovieCredits(id, abortController);
        setCast(result.data.cast);
      } catch (error) {
        if (error.message !== 'canceled') toast.error(error.message);
      }
    };

    getCast(movieId, abortController);

    return () => {
      abortController.abort();
    };
  }, [movieId]);

  return (
    <div>
      {cast && (
        <ul>
          {cast.map(item => (
            <Item key={item.id}>
              {item.profile_path && (
                <img src={`${DEF_PATH_IMAGE}${DEF_POSTER_SIZE_92}${item.profile_path}`} alt={item.name} />
              )}
              <p>{item.name}</p>
              <p>Character: {item.character}</p>
            </Item>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;
