const {Models, Datatypes} = require('sequelize');
const sequelize = require('../config/connection');

class Traveller extends Model {}

Traveller.init{
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            
        },
    }
}

