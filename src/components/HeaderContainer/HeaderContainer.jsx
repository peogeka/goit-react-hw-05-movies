import { Outlet } from 'react-router-dom';
import { Navigation, StyledLink, Container, Header } from './HeaderContainer.styled';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HeaderContainer = () => {
  return (
    <Container>
      <Header>
        <Navigation>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Navigation>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <ToastContainer />
    </Container>
  );
};

export default HeaderContainer;
