const auth = require('../scripts/auth/authMongo');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

const url = 'mongodb://192.168.99.100:27017';

let db = null;

const initializeDbConnexion = async () => {
  const client = await MongoClient.connect(url, {
    auth,
    poolSize: 10,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  db = client.db('catMatch');
};

function getCats(count, sortBy, sortedParam) {
  return db
    .collection('cats')
    .find()
    .limit(Number(count))
    .sort({ [sortBy]: Number(sortedParam) })
    .toArray();
}

function updateCatsWinnerStore(idWinner) {
  return db
    .collection('cats')
    .updateOne(
      { _id: new ObjectId(idWinner) },
      { $inc: { wonMatches: 1, partyPlayed: 1 } }
    );
}

function updateCatsLooserStore(idLooser) {
  return db
    .collection('cats')
    .updateOne({ _id: new ObjectId(idLooser) }, { $inc: { partyPlayed: 1 } });
}

initializeDbConnexion();

module.exports = { getCats, updateCatsWinnerStore, updateCatsLooserStore };
