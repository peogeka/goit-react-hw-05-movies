import { Link } from 'react-router-dom';

const SearchList = ({ movies, from }) => {
  return (
    <div>
      <ul>
        {movies.map(item => (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`} state={{ from: from }}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchList;
