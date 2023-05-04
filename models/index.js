const fs = require('fs');
const path = require('path');
const { Client } = require('pg');
const config = require('../config/db.json');

const dbConfig = config[process.env.NODE_ENV || 'development'];

const client = new Client(dbConfig);
client.connect();
process.on('beforeExit', () => client.end());

const db = {client}
const baseName = path.basename(__filename);
fs.readdirSync(__dirname)
.filter((fileName) => /\.js$/.test(fileName) && fileName !== baseName)
.forEach((fileName) => {
    const absPathFile = path.relative(__dirname, fileName);
    const Model = require(absPathFile);
    Model.client = client;
    db[Model.name] = Model;
})

module.exports = db;