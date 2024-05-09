'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
  }
  Question.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    type: DataTypes.ENUM('simple', 'multiple', 'dropdown'),
  }, {
    sequelize,
  });
  return Question;
};