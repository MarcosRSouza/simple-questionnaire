'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
  }
  Answer.init({
    content: DataTypes.TEXT,
    type: DataTypes.ENUM('text', 'image')
  }, {
    sequelize,
  });
  return Answer;
};