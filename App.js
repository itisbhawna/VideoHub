import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Videos from './components/Videos';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Upload from './components/Upload';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/videos' element={<Videos />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/upload' element={<Upload />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
