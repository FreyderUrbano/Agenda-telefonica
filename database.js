const mongoose = require('mongoose');

const URI = 'mongodb://localhost/agenda';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true
})
    .them(db => console.log('DB is conected'))
    .catch(err => console.error(err));

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('DB is Connected')
})
module.exports = mongoose;