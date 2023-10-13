import { DEF_PATH_IMAGE, DEF_POSTER_SIZE_500 } from 'components/API/api-be';
import { WrapperMovie } from './MovieDetails.styled';

const MovieDetails = ({ details }) => {
  return (
    <WrapperMovie>
      <div>
        <img src={`${DEF_PATH_IMAGE}${DEF_POSTER_SIZE_500}${details.poster_path}`} alt={details.title} />
      </div>
      <div>
        <h1>
          {details.title} ({details.release_date.split('-')[0]})
        </h1>
        <p>User Score: {Math.round(details.vote_average * 10)}%</p>
        <h2>Overview</h2>
        <p>{details.overview}</p>
        <h2>Genres</h2>
        <p>{details.genres.map(genre => genre.name).join(' ')}</p>
      </div>
    </WrapperMovie>
  );
};

export default MovieDetails;
