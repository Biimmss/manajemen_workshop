import { DataTypes } from 'sequelize';
import sequelize from '../utils/connection.js';

const RepairDetail = sequelize.define('RepairDetail', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cost: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default RepairDetail;
