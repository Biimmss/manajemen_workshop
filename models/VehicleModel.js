import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../utils/connection.js';
// import Customer from './Customer.js';

const Vehicle = sequelize.define('Vehicle', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  license_plate: {
    type: DataTypes.STRING,
    allowNull: false
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

// // Relasi Many-to-One: Satu customer bisa punya banyak kendaraan
// Vehicle.belongsTo(Customer, { onDelete: 'CASCADE', foreignKey: 'customer_id' });

export default Vehicle;
