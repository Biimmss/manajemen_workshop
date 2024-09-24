import { DataTypes } from 'sequelize';
import sequelize from '../utils/connection.js';
import Vehicle from './VehicleModel.js';
import Mechanic from './MechanicModel.js';

const RepairOrder = sequelize.define('RepairOrder', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  order_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  total_cost: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  repair_status: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// RepairOrder.belongsTo(Vehicle, { onDelete: 'CASCADE', foreignKey: 'vehicle_id' });
// RepairOrder.belongsTo(Mechanic, { onDelete: 'CASCADE', foreignKey: 'mechanic_id' });

export default RepairOrder;
