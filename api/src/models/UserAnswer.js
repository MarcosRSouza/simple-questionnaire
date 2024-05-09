'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class UserAnswer extends Model {
        static associate(models) {
            this.belongsTo(models.User, { foreignKey: 'user_id', as: 'users' });
            this.belongsTo(models.Answer, { foreignKey: 'answer_id', as: 'answers' });
        }
    }
    UserAnswer.init({
        user_id: {
            type: DataTypes.INTEGER,
            field: 'user_id',
            primaryKey: true
        },
        answer_id: {
            type: DataTypes.INTEGER,
            field: 'answer_id',
            primaryKey: true
        },
    }, {
        sequelize,
        tableName: 'user_answers',
        modelName: 'UserAnswer',
    });
    return UserAnswer;
};