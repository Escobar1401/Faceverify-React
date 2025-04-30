import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import image from './assets/logoFaceVerify.png'
import CircularButton from './components/CircularButton'
import Login from './pages/login'
import RecoveryPass from './pages/recoverypass'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className='container'>
            <div className='title-container'>
              <span>FACE</span>
            </div>
            <div className='logo-container'>
              <img src={image} alt="FaceVerify-logo" />
            </div>
            <div className='title-container'>
              <span>VERIFY</span>
            </div>
            <CircularButton to='/login' />
          </div>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/recoverypass" element={<RecoveryPass />} />
      </Routes>
    </Router>
  )
}

export default App
