import axios from 'axios';

const NB_CATS = 10;

export const getCats = async (
  nbCats = NB_CATS,
  sortBy = 'partyPlayed',
  sortedParam = 1
) => {
  const { data: cats } = await axios.get('/api/v1/cats', {
    params: {
      count: nbCats,
      sortBy,
      sortedParam,
    },
  });
  return cats;
};

export const updateCats = async (idWinner, idLooser) => {
  return await axios.post('/api/v1/cats', {
    params: {
      idWinner,
      idLooser,
    },
  });
};
