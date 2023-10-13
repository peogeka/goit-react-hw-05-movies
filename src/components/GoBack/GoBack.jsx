import { BiArrowBack } from 'react-icons/bi';
import { BackLink } from './GoBack.styled';

const GoBack = ({ to }) => {
  return (
    <>
      <BackLink to={to}>
        <BiArrowBack size="24" />
        Go back
      </BackLink>
    </>
  );
};

export default GoBack;
