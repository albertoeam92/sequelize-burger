var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");


var burger = sequelize.define("burger", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  name:{
    type: Sequelize.TEXT,
    len: 1

  },

  devour: {
    type: Sequelize.BOOLEAN
  },

  date: {
    type: Sequelize.DATE
  }

});

burger.sync();


module.exports = burger;
