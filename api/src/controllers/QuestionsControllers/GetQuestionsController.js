const { sequelize } = require('../../models/index.js');

const GetQuestionsController = async (req, res) => {
    try {
        const [questions] = await sequelize.query(`
            SELECT
                q.title AS "question_title",
                q."content" AS "question_content",
                q.type AS "question_type"
            FROM
                questions q
        `);
        for (let question of questions) {
            const [answers] = await sequelize.query(`
                SELECT
                    a.type AS "answer_type",
                    a.content AS "answer_content"
                FROM
                    answers a
                INNER JOIN question_answers qa ON
                    a.id = qa.answer_id
                WHERE 
                    qa.question_id = 1;
            `);
            question.question_options = answers;
        }
        return res.status(200).json(questions);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

module.exports = GetQuestionsController;