const traveller = require('./traveller');
const Location = require('./locations');
const Trips = require('./trips');

Trips.hasOne(Location, {
    foreignKey: 'traveller_id ',
    onDelete: 'CASCADE',
});

Location.hasMany(Traveller, {
    foreignKey: 'traveller_id',
    onDelete: 'CASCADE',
});

Traveller.hasMany(Trips, {
    foreignKey: 'traveller_id',
    onDelete: 'CASCADE',
})

module.exports = {Traveller, Location,Trips }