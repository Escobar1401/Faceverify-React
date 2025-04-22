import image from './assets/logoFaceVerify.png'
import CircularButton from './components/CircularButton'
import './App.css'

function App() {

  return (
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
      <CircularButton />
    </div>
  )
}

export default App
