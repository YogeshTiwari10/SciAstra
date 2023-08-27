import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Team from './pages/Team';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Error from './pages/Error/Error';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path={'/'} element={<Team />} />
      <Route path={'/teams'} element={<Team />} />
      <Route path={'*'} element={<Error />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
