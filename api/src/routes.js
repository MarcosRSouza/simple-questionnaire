const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const routes = express.Router();

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

// // NOTE: Boilerplate to test connection
// const { Sequelize } = require('sequelize');
// const sequelize = new Sequelize('questions_db', 'postgres', 'postgres', {
//     host: 'localhost',
//     dialect: 'postgres'
// });

routes.get('/questions', async (req, res) => {
    try {
        // await sequelize.authenticate();
        // console.log('Connection has been established successfully.');
        const mockQuestions = [
            {
                questionTitle: 'question 01',
                questionContent: 'lorem ipsum dolor sit amet, consectetur adip',
                questionOptionsType: 'simple',
                questionOptions: [{ title: 'lorem1' }, { title: 'lorem2' }, { title: 'lorem3' }, { title: 'lorem4' }]
            }, {
                questionTitle: 'question 02',
                questionContent: 'lorem olx bando de ***, ',
                questionOptionsType: 'simple',
                questionOptions: [{ title: 'lorem21' }, { title: 'lorem22' }, { title: 'lorem23' }, { title: 'lorem24' }]
            }];
        return res.status(200).json(mockQuestions);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});

routes.post('/questions', async (req, res) => {
    try {
        console.log('Answers saved successfully!');
        return res.status(200).send('Answers saved successfully!');
    } catch (error) {
        console.error('Something went wrong: ', error);
    }
});

module.exports = routes;
