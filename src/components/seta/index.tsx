import { type ReactElement } from 'react';
import styled, { keyframes } from 'styled-components';

// Animação de deslizar para CIMA
const deslizarParaCima = keyframes`
  0% { transform: translateY(10px); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(-15px); opacity: 0; }
`;

const SetaSvg = styled.svg`
  width: 24px;
  height: auto;
  z-index: 10;
  stroke: #3b82f6;
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  /* A animação agora cuida da centralização E do movimento */
  position: absolute;
  @media (max-width: 768px) {
    left: 46%;
  }
  left: 50%;
  top: 26%; /* Ajuste a altura que você quiser aqui */
  animation: ${deslizarParaCima} 2s linear infinite;
`;

const SetaParaCima = (): ReactElement => {
  return (
    <SetaSvg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      {/* Desenho da seta apontando para CIMA (↑) */}
      <path d="M12 21V3M12 3L17 8M12 3L7 8" />
    </SetaSvg>
  );
};

export default SetaParaCima;
