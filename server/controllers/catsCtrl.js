const catsCtrl = require('../store/catsStr');

async function getCats(req, res) {
  const {
    query: { count, sortBy, sortedParam },
  } = req;
  console.log(count, sortBy, sortedParam);
  const cats = await catsCtrl.getCats(count, sortBy, sortedParam);
  res.json(cats);
}

async function updateCats(req, res) {
  const {
    body: {
      params: { idWinner, idLooser },
    },
  } = req;
  await Promise.all([
    catsCtrl.updateCatsWinnerStore(idWinner),
    catsCtrl.updateCatsLooserStore(idLooser),
  ]);
  res.json('toto');
}

module.exports = { getCats, updateCats };
