import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css'
import Home from './component/Home'
import './assets/css/style.css'
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Login from './component/Login';
import SignUp from './component/SignUp';

function App() {  
  const location = useLocation();
  const HideHeaderFooter = location.pathname === "/login" || location.pathname === "/signup";
  return (
    <>
      {!HideHeaderFooter && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<SignUp />} />
      </Routes>
      {!HideHeaderFooter && <Footer />}
    </>
  )
}

export default App;
