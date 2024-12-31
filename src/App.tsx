import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './constants/routes';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.ROOT} element={<Layout />}>
          <Route index element={<LandingPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
