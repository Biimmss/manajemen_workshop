import { DataTypes } from 'sequelize';
import sequelize from '../utils/connection.js';

const RepairPart = sequelize.define('RepairPart', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

export default RepairPart;
