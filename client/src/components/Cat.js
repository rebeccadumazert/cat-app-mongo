import React from 'react';
import { CatContainer, CatPicture } from './styles/Cat';

export const Cat = ({
  cat: { catUrl, _id: idCatWinner } = {},
  updateDatas,
  catLooser: { _id: idCatLooser } = {},
}) => {
  return (
    <CatContainer onClick={updateDatas.bind(null, idCatWinner, idCatLooser)}>
      <CatPicture src={catUrl} alt="cat" />
    </CatContainer>
  );
};
