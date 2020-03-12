import React, { useEffect, useState } from 'react';
import { getCats } from '../services/catsSrv';
import { Link } from 'react-router-dom';
import {
  ContainerWinner,
  ContainerImgWinner,
  Winner,
  IconTrophy,
  Points,
} from './styles/Winners';
import { IconCat } from './IconCat';

const NB_WINNING_CATS = 3;
const SORT_BY = 'wonMatches';
const DESCENDANT = -1;

export const CatsResults = () => {
  const [winningCats, setWinningCats] = useState([]);

  useEffect(() => {
    const getWinningCats = async () => {
      const winningCats = await getCats(NB_WINNING_CATS, SORT_BY, DESCENDANT);
      setWinningCats(winningCats);
    };
    getWinningCats();
  }, []);
  return (
    <div>
      <Link to="/">
        <IconCat></IconCat>
      </Link>
      <IconTrophy>
        <img
          src="https://img.icons8.com/doodle/48/000000/trophy--v1.png"
          alt="torphy"
        />
      </IconTrophy>
      <ContainerWinner>
        {winningCats.map(({ catUrl, _id, wonMatches }) => (
          <ContainerImgWinner key={_id}>
            <Winner src={catUrl} alt="cat" />
            <Points>{wonMatches} POINTS</Points>
          </ContainerImgWinner>
        ))}
      </ContainerWinner>
    </div>
  );
};
