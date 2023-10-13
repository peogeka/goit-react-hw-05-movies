import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const BackLink = styled(Link)`
  border: 2px solid lightgray;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 120px;
  margin-bottom: 16px;
`;
