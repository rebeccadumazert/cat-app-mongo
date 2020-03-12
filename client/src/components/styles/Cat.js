import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CatsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;
export const CatContainer = styled.div`
  flex: 0 0 30%;
  @media (max-width: 500px) {
    flex: 0 0 45%;
    padding: 10px 5px 10px 5px;
  }
`;

export const VSContainer = styled.div`
  flex: 0 0 30%;
  @media (max-width: 500px) {
    display: none;
  }
`;

export const CatPicture = styled.img`
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
  background: linear-gradient(to right, #ff7601, #fff900);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 20px;
  padding-bottom: 40px;
  @media (max-width: 500px) {
    padding-bottom: 0;
  }
`;

export const Button = styled.button`
  border-radius: 7px;
  background-color: transparent;
  border: solid 1px transparent;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(101deg, #fff900, #ff7601);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px #fff inset;
  padding: 15px;
  display: block;
  margin: auto;
  font-family: 'Permanent Marker', cursive;
  color: #ff7601;
  font-size: larger;
  @media (max-width: 500px) {
    margin-top: 50px;
  }
`;

export const LinkResults = styled(Link)`
  text-decoration: none;
`;
