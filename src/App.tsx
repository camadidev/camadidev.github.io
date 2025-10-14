
import phoneApps from './assets/phone_apps.png'
//import './App.css'
import './styles/layout.css';
import './styles/sections/inicio.css';
import "./styles/sections/apps.css";
import './styles/components/cards.css';
import './styles/sections/servicios.css';
import './styles/sections/nosotros.css';
import './styles/sections/contacto.css';
import './styles/responsive.css';

import Layout from './components/Layout';
import { appsData } from './data/appsData';



function App() {


  return (

    <Layout>
      <div id="inicio-seccion" className="seccion-inicio">
  <div className="inicio-texto">
    <h1>Innovamos con apps que hacen tu vida más entretenida o más fácil</h1>
    <p>Somos una pyme especializada en el desarrollo de aplicaciones
      que ayuda a resolver problemas reales y mejoran la experiencia de
      nuestros usuarios.
    </p>
    <div className="botones-inicio">
      <a href="#apps-seccion" className="btn-solid">Ver nuestras apps</a>
      <a href="#contacto-seccion" className="btn-outline">Contáctanos</a>
    </div>
  </div>
  <img className="img-app-inicio" src={phoneApps} alt="Telefono imagen" />
</div>


      <div id="apps-seccion" className="seccion-apps">

        <h2>Nuestras aplicaciones</h2>
        <div className="app-card-grid">

          {appsData.slice(0, 4).map((app) => (
            // La "key" es esencial en React para las listas
            <div key={app.id} className="app-card">

              {/* 1. Contenedor Visual (la imagen) */}
              <div className="card-visual">
                <img
                  src={app.mockupImage} //LA IMAGEN DESDE TUS DATOS
                  alt={`Captura de pantalla de la app ${app.name} en un teléfono`}
                  className="app-mockup-img"
                />
              </div>

              {/* 2. Contenedor de Contenido */}
              <div className="card-content-area">
                <div className="card-header">
                  <h3 className="app-title">{app.name}</h3>
                  <span className="category-tag">{app.category}</span>
                </div>

                <p className="app-description">{app.description}</p>

                <div className="card-footer-stats">
                  <span>⭐ {app.rating}</span>
                  <span>{app.downloads} descargas</span>
                </div>

                <div className="card-downloads">
                  <a href={app.playStoreLink} className="btn-download btn-google">Google Play</a>
                  <a href={app.appStoreLink} className="btn-download btn-apple">App Store</a>
                </div>


              </div>
            </div>
          ))}
        </div>

        {/* Botón de "Ver todas las apps" */}
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <a href="#" className="btn-outline">Ver todas las aplicaciones</a>
        </div>
      </div>

      <div id="servicios-seccion" className="seccion-servicios">
        <h2>Servicios</h2>
        <div className="servicios-grid">
          <div className="servicio-card">
            <h3>Desarrollo de Apps</h3>
            <p>Diseñamos y construimos aplicaciones móviles que resuelven problemas reales.</p>
          </div>
          <div className="servicio-card">
            <h3>Consultoría Técnica</h3>
            <p>Te ayudamos a definir, planificar y escalar tu proyecto digital.</p>
          </div>
          <div className="servicio-card">
            <h3>Diseño UX/UI</h3>
            <p>Creamos experiencias visuales intuitivas y centradas en el usuario.</p>
          </div>
        </div>
      </div>

      <div id="nosotros-seccion" className="seccion-nosotros">
  <h2>Nosotros</h2>
  <div className="nosotros-contenido">
    <p>
      En CAMADI creemos en el poder de la tecnología para transformar vidas. Somos una pyme costarricense dedicada al desarrollo de aplicaciones móviles que conectan salud, comunidad y bienestar.
    </p>
    <p>
      Nuestro equipo combina creatividad, experiencia técnica y compromiso social para crear soluciones digitales que resuelven problemas reales. Cada proyecto que emprendemos busca mejorar la experiencia de nuestros usuarios y aportar valor a la sociedad.
    </p>
  </div>
</div>

      <div id="contacto-seccion" className="seccion-contacto">
  <h2>Contacto</h2>
  <div className="contacto-grid">
    <div className="contacto-item">
      <h3>📧 Correo</h3>
      <a href="mailto:camadicontacto@gmail.com">camadicontacto@gmail.com</a>
    </div>
    <div className="contacto-item">
      <h3>📘 Facebook</h3>
      <a href="https://www.facebook.com/camadidev" target="_blank" rel="noopener noreferrer">CAMADI</a>
    </div>
  </div>
</div>

    </Layout>

  )
}

export default App
