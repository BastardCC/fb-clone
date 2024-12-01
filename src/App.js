import './App.css';
import Navbar from './components/Navbar/Navbar';

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home/Home';
import Watch from './pages/Watch/Watch';
import Groups from '@mui/icons-material/Groups';
import Gaming from './pages/Gaming/Gaming';

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/watch' element={<Watch/>} />
          <Route exact path='/groups' element={<Groups/>} />
          <Route exact path='/gaming' element={<Gaming/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
