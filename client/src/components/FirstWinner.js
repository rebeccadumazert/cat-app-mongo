import React from 'react';
import { ContainerWinner } from './styles/Winners';
export const FirstWinner = ({ winner: { catUrl } = {} }) => {
  return (
    <ContainerWinner>
      <img src="https://img.icons8.com/doodle/48/000000/first-place-ribbon--v1.png" />
      <img src={catUrl} alt="" />
    </ContainerWinner>
  );
};
