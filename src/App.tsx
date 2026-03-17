import { Container, GlobalStyle } from './styles';
import { Hero } from './containers/hero';
import Body from './containers/Body';
import { useEffect } from 'react';
import Footer from './containers/footer';

function App() {
  useEffect(() => {
    // Agora o React permite, pois está dentro de um "Efeito Colateral"
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Opcional: Garante o topo no primeiro carregamento
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <GlobalStyle />
      <Hero />
      <Container>
        <Body />
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
}

export default App;
