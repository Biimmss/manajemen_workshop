import { DataTypes } from 'sequelize';
import sequelize from '../utils/connection.js';
import RepairOrder from './RepairOrderModel.js';

const Invoice = sequelize.define('Invoice', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  invoice_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  total_amount: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

// Invoice.belongsTo(RepairOrder, { onDelete: 'CASCADE', foreignKey: 'repair_order_id' });

export default Invoice;
