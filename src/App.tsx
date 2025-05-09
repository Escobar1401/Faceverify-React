import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import image from './assets/logoFaceVerify.png'
import CircularButton from './components/CircularButton'
import Login from './pages/login'
import RecoveryPass from './pages/recoverypass'
import ChangePass from './pages/changepass';
import HomePage from './pages/home'
import JustificationAbsence from './pages/estudiante/JustificationAbsence';
import Excuses from './pages/estudiante/Excuses';
import Statistics from './pages/estudiante/Statistics';
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
        <Route element={<MainLayout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/justification" element={<JustificationAbsence />} />
          <Route path="/excuses" element={<Excuses />} />
          <Route path="/statistics" element={<Statistics />} />
        </Route>
        <Route path="/changePass" element={<ChangePass />} />
        <Route path="*" element={
          <div className='container'>
            <div className='title-container'>
              <span>404</span>
            </div>
            <div className='title-container'>
              <span>Página no encontrada</span>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App
