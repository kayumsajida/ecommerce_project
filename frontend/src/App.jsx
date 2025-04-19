import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './component/Home'
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Login from './component/Login';
import SignUp from './component/SignUp';
import ForgotPassword from './component/ForgotPassword';

function App() {  
  const location = useLocation();
  const HideHeaderFooter = location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/forgot-password";
  return (
    <>
      {!HideHeaderFooter && <Navbar />}
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/forgot-password' element={<ForgotPassword />} />
      </Routes>
      {!HideHeaderFooter && <Footer />}
    </>
  )
}

export default App;
