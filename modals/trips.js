const { Model, DataTypes } = require('sequelize');
const sequelize = require('./connections/connections');

class Trips extends Model {}

Trips.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    trip_budget: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    traveler_amount:{
        type: DataTypes.INTEGER,
    },
    traveler_id:{
        type:DataTypes.INTEGER,
        references:{
            model: 'traveler',
            key:'id'
        }
    },
    location_id:{
        type:DataTypes.INTEGER,
        references:{
            model: 'location',
            key:'id'
        }
    }

    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'trips',
  }
);

module.exports = Trips;