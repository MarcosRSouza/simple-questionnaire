'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class QuestionAnswer extends Model {
        static associate(models) {
            this.belongsTo(models.Question, { foreignKey: 'question_id', as: 'questions' });
            this.belongsTo(models.Answer, { foreignKey: 'answer_id', as: 'answers' });
        }
    }
    QuestionAnswer.init({
        question_id: {
            type: DataTypes.INTEGER,
            field: 'question_id',
            primaryKey: true
        },
        answer_id: {
            type: DataTypes.INTEGER,
            field: 'answer_id',
            primaryKey: true
        },
    }, {
        sequelize,
        tableName: 'question_answers',
        modelName: 'QuestionAnswer',
    });
    return QuestionAnswer;
};