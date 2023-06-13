const Traveler = require('./traveler');
const Location = require('./location');
const Trips = require('./trips');

Traveler.belongsToMany(Location, {
  through: 'traveler_locations'
});

Location.belongsToMany(Traveler, {
    through: 'traveler_locations'
});

Trips.hasOne(Location,{
    foreignKey :'location_id',
    onDelete:'CASCADE'
})

Location.be
Reader.hasMany(Book,{
  foreignKey : 'reader_id',
  onDelete:'CASCADE'
});

Book.belongsTo(Reader,{
  foreignKey:'reader_id'
})
module.exports = { Reader, Book, LibraryCard };
