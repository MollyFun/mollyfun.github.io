import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Main = styled.main`
  min-height: 100vh;
  padding-top: 80px; // To account for the fixed header
`;

const Layout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default Layout;
