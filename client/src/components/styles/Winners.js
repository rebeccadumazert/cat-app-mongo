import styled from 'styled-components';

export const ContainerWinner = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 5%;
  @media (max-width: 500px) {
    height: 60vh;
    display: block;
  }
`;

export const ContainerImgWinner = styled.div`
  flex: 0 0 30%;
  padding: 3%;
  @media (max-width: 500px) {
  }
`;

export const Winner = styled.img`
  object-fit: cover;
  border-radius: 5%;
  width: 100%;
  height: 50vh;
  @media (max-width: 500px) {
    height: 35vh;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-family: 'Permanent Marker', cursive;
  font-size: -webkit-xxx-large;
  margin: 0;
  background: linear-gradient(to right, #ff7601, #fff900);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 500px) {
    font-size: x-large;
  }
`;

export const IconTrophy = styled.div`
  text-align: center;
`;

export const Points = styled.p`
  text-align: center;
  font-family: 'Permanent Marker', cursive;
  color: #ff7601;
  font-size: larger;
  @media (max-width: 500px) {
    font-size: medium;
    margin: 0;
  }
`;

export const ContainerIconCat = styled.div`
  position: absolute;
  padding: 10px;
  top: 0;
`;
