import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './component/Home'
import './assets/css/style.css'
import Footer from './component/Footer';
import Navbar from './component/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />        
      </Routes>
      <Footer />
    </>
  )
}

export default App;
