import { useEffect } from 'react';
import './App.css';
import { Button, Container, ThemeProvider, Stack } from '@mui/material';
import theme from './styles/themes/index';
import Appbar from './components/appbar/AppBar';
import Banner from './components/banner';
import Blog from './components/blog';
import { Route, Router, Routes, BrowserRouter } from 'react-router-dom';
import AppBar from './components/appbar/AppBar';
import Projects from './components/projects';
import About from './components/about';

function App() {

  useEffect(() => {
    document.title = 'Urban Science MEP'
  }, [])
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={theme}>
        <Container
          disableGutters
          maxWidth="xl"
          sx={{
            background: "#fff",
          }}
        >
          <AppBar />
          <Stack>
            <Routes>
              <Route  path='/' element={<Banner />} />
              <Route  path="/blog" element={<Blog />} />
              <Route  path='/projects' element={<Projects />} />
              <Route  path='/about' element={<About />} />
            </Routes>
          </Stack>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
