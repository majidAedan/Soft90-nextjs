'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Application extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Application.init(
    {
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
    },
    {
      sequelize, // Pass the Sequelize instance
      modelName: 'Application', // Name used internally by Sequelize
      tableName: 'Applications', // Database table name
      timestamps: true, // Enables createdAt and updatedAt columns
    }
  );
  return Application;
};