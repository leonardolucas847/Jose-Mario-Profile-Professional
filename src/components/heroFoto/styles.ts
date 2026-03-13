import styled from 'styled-components';

export const Foto = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: center;
  /* Impede que a imagem seja arrastada */
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  /* Impede que o mouse interaja com ela (opcional) */
  pointer-events: none;
  @media (max-width: 768px) {
    object-position: center;
  }
`;
