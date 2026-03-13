import { Foto } from './styles';

const HeroFoto = () => (
  <picture>
    {/* Se a tela for no máximo 768px, usa esta imagem */}
    <source
      media="(max-width: 768px)"
      srcSet="../../../Art-compri-cel-final.webp"
    />

    {/* Imagem padrão (Desktop) */}
    <Foto src="../../../art-pc-hero-final.webp" alt="Hero Image" />
  </picture>
);

export default HeroFoto;
