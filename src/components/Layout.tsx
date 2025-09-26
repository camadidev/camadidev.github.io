import React, { type ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

// 1. Definimos los "props" que este componente va a recibir.
// En este caso, solo va a recibir un "children", que es el contenido
// que va dentro del layout (el cuerpo de la página).
interface LayoutProps {
  children: ReactNode;
}

// Usamos "React.FC" para indicar que es un componente de función
// y le pasamos los "props" que definimos arriba.
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-container">
      <Header/>
      {/* Aquí se mostrará todo el contenido de la página que le pasemos */}
      <main className="main-content">
        {children}
      </main>
      
      <Footer/>
    </div>
  );
};

export default Layout;