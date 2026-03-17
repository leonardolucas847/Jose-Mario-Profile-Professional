import { type ReactElement } from 'react';
import { Cabecalho, Cupom, FotoG } from './styles';

const Footer = (): ReactElement => {
  return (
    <Cabecalho>
      <FotoG src="../../../growthlogo.webp" />
      <Cupom>
        Use o cupom: <span>ZEMARIO</span>
      </Cupom>
    </Cabecalho>
  );
};

export default Footer;
