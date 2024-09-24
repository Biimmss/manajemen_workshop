// Import semua model
import Customer from './CustomerModel.js';
import Vehicle from './VehicleModel.js';
import Mechanic from './MechanicModel.js';
import RepairOrder from './RepairOrderModel.js';
import RepairDetail from './RepairDetailModel.js';
import Part from './PartModel.js';
import RepairPart from './RepairPartModel.js';
import Service from './ServiceModel.js';
import Invoice from './invoiceModel.js';
import Payment from './PaymentModel.js';
import db from '../utils/connection.js'

// Menetapkan relasi antar model di sini

// Relasi One-to-Many: Customer ke Vehicle
Customer.hasMany(Vehicle, { foreignKey: 'customer_id', onDelete: 'CASCADE' });
Vehicle.belongsTo(Customer, { foreignKey: 'customer_id', onDelete: 'CASCADE' });

// Relasi One-to-Many: Vehicle ke RepairOrder
Vehicle.hasMany(RepairOrder, { foreignKey: 'vehicle_id', onDelete: 'CASCADE' });
RepairOrder.belongsTo(Vehicle, { foreignKey: 'vehicle_id', onDelete: 'CASCADE' });

// Relasi One-to-Many: Mechanic ke RepairOrder
Mechanic.hasMany(RepairOrder, { foreignKey: 'mechanic_id', onDelete: 'CASCADE' });
RepairOrder.belongsTo(Mechanic, { foreignKey: 'mechanic_id', onDelete: 'CASCADE' });

// Relasi One-to-Many: RepairOrder ke RepairDetail
RepairOrder.hasMany(RepairDetail, { foreignKey: 'repair_order_id', onDelete: 'CASCADE' });
RepairDetail.belongsTo(RepairOrder, { foreignKey: 'repair_order_id', onDelete: 'CASCADE' });

// Relasi Many-to-Many: Service ke RepairDetail
Service.belongsToMany(RepairDetail, {
  foreignKey: "Service_id",
  through: "ServiceRepairDetails",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
})

RepairOrder.belongsToMany(Part, {
  foreignKey: "RepairOrder_id",
  through: "ServiceRepairDetails",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
})

// Relasi One-to-Many: RepairOrder ke RepairPart
RepairOrder.hasMany(RepairPart, { foreignKey: 'repair_order_id', onDelete: 'CASCADE' });
RepairPart.belongsTo(RepairOrder, { foreignKey: 'repair_order_id', onDelete: 'CASCADE' });

// Relasi Many-to-Many: Part ke RepairPart
// Part.belongsToMany(RepairOrder, { through: "RepairPartDetails", foreignKey: 'part_id', otherKey: 'repair_order_id', onDelete: 'CASCADE' });
// RepairOrder.belongsToMany(Part, { through: "RepairPartDetails", foreignKey: 'repair_order_id', otherKey: 'part_id', onDelete: 'CASCADE' });

Part.belongsToMany(RepairOrder, {
  foreignKey: "Part_id",
  through: "partRepairOrder",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
})

RepairOrder.belongsToMany(Part, {
  foreignKey: "RepairOrder_id",
  through: "PartRepairOrder",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
})

// Relasi One-to-One: RepairOrder ke Invoice
RepairOrder.hasOne(Invoice, { foreignKey: 'repair_order_id', onDelete: 'CASCADE' });
Invoice.belongsTo(RepairOrder, { foreignKey: 'repair_order_id', onDelete: 'CASCADE' });

// Relasi One-to-One: Invoice ke Payment
Invoice.hasOne(Payment, { foreignKey: 'invoice_id', onDelete: 'CASCADE' });
Payment.belongsTo(Invoice, { foreignKey: 'invoice_id', onDelete: 'CASCADE' });


    await Customer.sync();
    await Vehicle.sync();
    await Mechanic.sync();
    await Service.sync();
    await RepairOrder.sync();
    await RepairDetail.sync();
    await Part.sync();
    await RepairPart.sync();
    await Invoice.sync();
    await Payment.sync();


await db.sync({force:true})

export {
  Customer,
  Vehicle,
  Mechanic,
  RepairOrder,
  RepairDetail,
  Part,
  RepairPart,
  Service,
  Invoice,
  Payment
};
