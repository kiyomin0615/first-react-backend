const mongodb = require("mongodb");

let database;

async function connectToDatabase() {
  const client = await mongodb.MongoClient.connect("mongodb://localhost:27017");
  database = client.db("first-react");
}

function getDatabase() {
  if(!database) {
    throw new Error();
  }

  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDatabase: getDatabase
}
