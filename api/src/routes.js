const express = require('express');
const routes = express.Router();

routes.get('/questions', async (req, res) => {
    try {
        const questionsMock = [{ "hello": "world" }]
        return res.status(200).json(questionsMock);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});

module.exports = routes;
