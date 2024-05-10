const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const routes = express.Router();

const GetQuestionsController = require('./controllers/QuestionsControllers/GetQuestionsController.js');

const safeList = [
    'http://localhost:3000'
];

const corsOptions = {
    origin: function (origin, callback) {
        if (safeList.indexOf(origin) !== -1) {
            callback(null, true);
        }
        else {
            callback(new Error('Not Allowed by CORS policy!'));
        }
    }
};

routes.use(cors(corsOptions));
routes.use(helmet());

routes.get('/questions', GetQuestionsController);

routes.post('/questions', async (req, res) => {
    try {
        console.log('Answers saved successfully!');
        return res.status(200).send('Answers saved successfully!');
    } catch (error) {
        console.error('Something went wrong: ', error);
    }
});

module.exports = routes;
