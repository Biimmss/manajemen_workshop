import { DataTypes } from 'sequelize';
import sequelize from '../utils/connection.js';

const Mechanic = sequelize.define('Mechanic', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  specialist: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Mechanic;
