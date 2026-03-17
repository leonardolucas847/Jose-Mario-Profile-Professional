import styled from 'styled-components';

export const Cabecalho = styled.footer`
  display: flex;
  flex-direction: column; /* Um embaixo do outro */
  align-items: center;
  padding-bottom: 64px;
`;
export const FotoG = styled.img`
  max-width: 300px;
  width: 100%;
  object-position: center;

  /* Impede que a imagem seja arrastada */
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  padding-bottom: 8px;
  padding-top: 48px;
  @media (max-width: 768px) {
    object-position: center;
  }
`;

export const Cupom = styled.p`
  font-weight: 700;
  font-size: 48px;
  padding-bottom: 32px;
  padding-top: 24px;
  span {
    font-weight: 400;
    color: #3b82f6;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;
