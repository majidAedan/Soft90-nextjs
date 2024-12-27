'use strict';

const path = require('path');
const { Sequelize, DataTypes} = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect:'mysql',
  dialectModule: require('mysql2'),
});

db.applications = applicationModel(sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;



function applicationModel(sequelize) {
  const attributes = {
    name: {
      type: DataTypes.STRING,
      allowNull: false, // Title is required
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true, // Optional field
    },
    download_link: {
      type: DataTypes.TEXT,
      allowNull: false, // Required field
    },
    last_updated: {
      type: DataTypes.STRING,
      allowNull: true, // Optional field
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true, // Optional field
    },
  };

  const options = {
    modelName: 'Application', // Name used internally by Sequelize
    tableName: 'Applications', // Database table name
    timestamps: true, // Enables createdAt and updatedAt columns
    defaultScope: {
      // exclude password hash by default
      attributes: { exclude: ['hash'] }
    },
    scopes: {
      // include hash with this scope
      withHash: { attributes: {}, }
    }
  };

  return sequelize.define('Application', attributes, options);
}

module.exports = db;
