import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './component/Login';
import SignUp from './component/SignUp';
import ForgotPassword from './component/ForgotPassword';
import UserLayout from './component/Layout/UserLayout';

function App() {  
  // const location = useLocation();
  // const HideHeaderFooter = location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/forgot-password";
  return (
    <>
      {/* {!HideHeaderFooter && <Navbar />} */}
      <Routes>
        <Route path='/' element={ <UserLayout /> } />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/forgot-password' element={<ForgotPassword />} />
      </Routes>
      {/* {!HideHeaderFooter && <Footer />} */}
    </>
  )
}

export default App;
