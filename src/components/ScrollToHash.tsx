import { useEffect } from 'react';

const ScrollToHash = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const scrollTo = () => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      };

      // Esperamos un poco para asegurar que el DOM esté listo
      setTimeout(scrollTo, 200);
    }
  }, []);

  return null;
};

export default ScrollToHash;
