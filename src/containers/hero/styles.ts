import styled from 'styled-components';

export const HeroContainer = styled.section`
  position: relative; //
  width: 100%;
  height: 100vh; // A altura que você definiu para o Hero
  overflow: hidden;
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
`;
export const ButtonHero = styled.div`
  align-items: center;
  position: absolute;
  z-index: 9999;
  margin-top: 88vh;
  @media (max-width: 768px) {
    margin-top: 78vh;
  }
`;
export const FraseHero = styled.div`
  position: absolute;
  align-items: center;
  margin-top: 76vh;
  font-size: 22px;
  color: #fff;
  @media (max-width: 768px) {
    position: absolute;
    width: 100%;
    margin-top: 86vh;
    font-size: 18px;
    color: #fff;
  }
`;
