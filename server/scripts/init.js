const auth = require('./auth/authMongo');
const MongoClient = require('mongodb').MongoClient;

const cats = require('./cats.json');

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

const addCats = async () => {
  try {
    const catsImg = cats.images;
    const catsDb = catsImg.map(cat => ({
      catUrl: cat.url,
      wonMatches: 0,
      partyPlayed: 0,
    }));
    await db.collection('cats').insertMany(catsDb);
  } catch (e) {
    console.error(e);
  }
};

const clearDb = async () => {
  try {
    return await db.dropDatabase();
  } catch (e) {
    console.error(e);
  }
};

const initializeDb = async () => {
  await initializeDbConnexion();
  await clearDb();
  await addCats();
};

initializeDb();
