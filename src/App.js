import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/mainPage/MainPage';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
