import logoCamadi from '../assets/logoCamadi.png'

const Header = () => {
  return (
    <header className="header-container"> 
      <img className="header-logo" src={logoCamadi} alt="LOGO CAMADI" />
      <h3 className="titulo-camadi">
        CAMADI
      </h3>
      <nav className="barra-navegacion">
        <a href="#inicio-seccion">Inicio</a>
        <a href="#apps-seccion">Nuestras aplicaciones</a>
        <a href="#servicios-seccion">Servicios</a>
        <a href="#nosotros-seccion">Nosotros</a>
        <a href="#contacto-seccion">Contacto</a>
        <a className="btn-porfolio" href="#apps-seccion">Porfolio</a>
      </nav>
    </header>
  );
};

export default Header;