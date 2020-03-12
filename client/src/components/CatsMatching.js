import React, { useState, useEffect } from 'react';
import { Cat } from './Cat';
import {
  CatsContainer,
  Title,
  Button,
  CatContainer,
  CatPicture,
  LinkResults,
} from './styles/Cat';
import { getCats, updateCats } from '../services/catsSrv';

const GIF_VS = 'https://media3.giphy.com/media/fYwuzOT53K7K4XLIq4/giphy.gif';

export const CatsMatching = () => {
  const [cats, setCats] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const getCatsList = async () => {
      const catsList = await getCats();
      setCats(oldCatList => [
        ...oldCatList.slice(0, oldCatList.length - 2),
        ...catsList,
      ]);
    };
    if ((index / 2) % 4 === 0) {
      getCatsList();
    }
  }, [index]);

  console.log(index);

  console.log(cats);

  const updateIndex = () => {
    setIndex(oldIndex => oldIndex + 2);
  };

  const updateDatas = (idCatWinner, idCatLooser) => {
    updateIndex();
    updateCats(idCatWinner, idCatLooser);
  };

  return (
    <div>
      <Title>QUI SERA LE MEILLEUR ?</Title>
      <CatsContainer>
        <Cat
          cat={cats[index]}
          catLooser={cats[index + 1]}
          updateDatas={updateDatas}
        ></Cat>
        <CatContainer>
          <CatPicture src={GIF_VS} alt="" />
        </CatContainer>
        <Cat
          cat={cats[index + 1]}
          catLooser={cats[index]}
          updateDatas={updateDatas}
        ></Cat>
      </CatsContainer>
      <LinkResults to="/wins">
        <Button>SCORES</Button>
      </LinkResults>
    </div>
  );
};
