import { getMovieReviews } from 'components/API/api-be';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Reviews = () => {
  const [reviews, setReviews] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    const getReviews = async (id, abortController) => {
      try {
        const result = await getMovieReviews(id, abortController);
        setReviews(result.data.results);
      } catch (error) {
        if (error.message !== 'canceled') toast.error(error.message);
      }
    };

    getReviews(movieId, abortController);

    return () => {
      abortController.abort();
    };
  }, [movieId]);

  return (
    <div>
      {reviews && reviews.length ? (
        <ul>
          {reviews.map(item => (
            <li key={item.id}>
              <p>{item.author}</p>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don`t have any reviews for this move</p>
      )}
    </div>
  );
};

export default Reviews;
