
import logoCamadi from './assets/logoCamadi.png'
import './App.css'

function App() {
  

  return (
    <>
      <div>
        <a href="https://camadidev.github.io" target="_blank">
          <img src={logoCamadi} className="logo" alt="Logo CAMADI" />
        </a>
    
      </div>
      <h1>CAMADI - En desarrollo</h1>

      <h2>APPS</h2>
      <div className="card">
        <a 
        href="https://play.google.com/store/apps/details?id=com.camadi.fortunenumerosuerte" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Fortuna Numeros de la suerte
      </a>

      </div>

      <div className="card">
        <a 
        href="https://play.google.com/store/apps/details?id=com.camadi.rifitas" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Rifitas
      </a>
      </div>

      <p className="read-the-docs">
        
      </p>
    </>
  )
}

export default App
