import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
    scroll-behavior: smooth;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    -webkit-tap-highlight-color: transparent; /* Remove o brilho azul no mobile */
  user-select: none; /* Impede a seleção de texto/elementos */
    }`;

export const Container = styled.div`
  background-color: #01020a;
  display: flex;
  justify-content: center;
  align-items: center;
`;
