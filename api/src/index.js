const express = require('express');
const app = express();
const port = 8000;

// NOTE: Boilerplate to test connection
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('questions_db', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});

app.get('/', async (req, res) => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});

app.listen(port, () => {
    console.log('listening on port ' + port);
});