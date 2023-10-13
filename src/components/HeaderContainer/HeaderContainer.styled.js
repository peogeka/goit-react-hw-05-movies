import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
`;

export const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 20px;
`;

export const Header = styled.header`
  box-shadow: 0px 5px 5px lightgray;
  padding: 16px 32px;
`;
