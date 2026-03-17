import styled, { keyframes } from 'styled-components';

// 1. Definição da animação
export const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

// 2. Estilização do container
export const ObserverContainer = styled.div`
  opacity: 0;
  width: 100%; /* Garante que ocupe a largura disponível */
  max-width: 800px; /* Trava o tamanho máximo aqui! */
  display: flex;
  flex-direction: column;
  align-items: center;

  &.is-visible {
    animation: ${fadeIn} 1s ease-out forwards;
  }
`;
// 3. Tipagem para o TypeScript

export const CardLayout = styled.a`
  /* Usamos 'a' para o card todo ser um link */
  text-decoration: none;
  color: inherit;
  width: 100%;
  max-width: 800px; /* Limite de largura no PC */
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  align-items: center;
  padding: 24px 0px;
`;

export const TextoExplicacao = styled.p`
  max-width: 800px;
  width: 100%;
  font-size: 24px;
  padding-top: 32px;
  text-align: center;
  padding-bottom: 24px;
  overflow-wrap: break-word; /* Força a quebra de palavras gigantes */
  word-wrap: break-word; /* Compatibilidade com browsers antigos */
  hyphens: auto; /* Opcional: adiciona hífens na quebra */
  @media (max-width: 768px) {
    font-size: 16px;
    padding-top: 48px;
  }
`;

interface ImagemProps {
  $url: string;
}

export const ImagemCard = styled.div<ImagemProps>`
  width: 100%;
  aspect-ratio: 16 / 9; /* Mantém a proporção sem deformar */
  background-image: url(${(props) => props.$url});
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  z-index: 2;

  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;
export const BodyLayout = styled.section`
  display: flex;
  flex-direction: column; /* Um embaixo do outro */
  align-items: center;
  gap: 20px; /* Espaço entre os cards */
  padding: 8px 16px;
  width: 100%;
  max-width: 800px;
  min-height: 100vh;
  color: #fff;
`;

export const TextoLayout = styled.div`
  position: relative;
  border: 2px solid #3b82f6; /* Cor do seu outline */
  padding: 24px;
  padding-top: 48px;
  border-radius: 24px;
  bottom: 16px;
  width: 98%;
  z-index: 1;
  -webkit-mask-image: linear-gradient(to top, black 50%, transparent 90%);
  mask-image: linear-gradient(to top, black 50%, transparent 80%);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
`;

export const Span = styled.span`
  text-align: center;
  display: block;
  color: #8a8a8a;
`;
