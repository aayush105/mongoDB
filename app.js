//jshint esversion:6

const MongoClient  = require("mongodb").MongoClient;

const assert = require("assert");  // assert does the testing

// Connection URL
const url = "mongodb+srv://fruitsDB:12345@shinux.uehurar.mongodb.net/?retryWrites=true&w=majority";

// Database Name
const dbName = "fruitsDB";

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the server
client.connect(function(err){
    assert.equal(null, err);
    console.log("Connected successfully to the server");

    const db = client.db(dbName);
    
    client.close();
});
