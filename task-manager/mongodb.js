// CRUD create read update delete

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

//TODO: zorg dat mongodb aanstaat in powershell

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }

    const db = client.db(databaseName);

    db.collection("users").insertOne(
      {
        name: " Sander",
        age: 28,
      },
      (error, result) => {
        if (error) {
          return console.log("Unable to insert user");
        }
        console.log(result.ops);
      }
    );
  }
);
