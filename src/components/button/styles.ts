import styled from 'styled-components';

export const WhatsAppButton = styled.a`
  /* Layout e Posicionamento */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  /* Estilo do Botão */
  /* background-color: #4441c2;  Verde oficial do WhatsApp #161c48  #45466c*/
  /* color: #fff;*/

  background-color: transparent;
  color: #fff;
  border: 2px solid #4441c2;
  padding: 12px 24px;
  border-radius: 50px;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;
  box-shadow: 0 4px 30px rgba(177, 176, 207, 0.8);

  /* Transição Suave */
  transition: all 0.3s ease;
  cursor: pointer;

  /* Interatividade (Hover) */
  &:hover {
    background-color: #4441c2;
    color: #fff;
    transform: translateY(-3px); /* Efeito de subir levemente */
    box-shadow: 0 6px 15px rgba(177, 176, 207, 1);
  }

  /* Clique (Active) */
  &:active {
    transform: translateY(-1px);
  }

  /* Ajuste para Tablet/Mobile */
  @media (max-width: 1024px) {
    width: 100%; /* No tablet/celular ele vira um botão de largura total */
    font-size: 12px;
    padding: 12px 18px;
  }
`;
