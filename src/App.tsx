import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Searchbar from './components/Searchbar/Searchbar';
import { Navbar } from './components/UI/Navbar';
import { Spinner } from './components/UI/Spinner';

const SingleMovie = lazy(() => import('./components/SingleMovie/SingleMovie'));
const Home = lazy(() => import('./components/Home'));

interface Theme {
  [key: string]: string;
}

const StyledContainer = styled.section`
  width: 70vw;
  margin: 0 auto;
`;

const theme: Theme = {
  colorPrimary: '#00FFF5',
  colorPrimaryDark: '#11c8f7',
  colorGrey: '#bdbdbd',
  colorGreyDark: '#263238',
  colorBlack: '#000'
};

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          width: '100%',
          height: '100%'
        }}
      >
        <StyledContainer>
          <Router>
            <>
              <Navbar />
              <Searchbar />
              <Suspense fallback={<Spinner />}>
                <Route exact={true} path="/" component={() => <Home />} />
                <Route
                  exact={true}
                  path="/movie/:id"
                  component={() => <SingleMovie />}
                />
              </Suspense>
            </>
          </Router>
        </StyledContainer>
      </div>
    </ThemeProvider>
  );
};
