// Purpose: Connect to the Mongo DB
const { connect, connection } = require('mongoose');

// Connect to the Mongo DB
connect('mongodb://127.0.0.1:27017/socialNetwork');

// Export the connection
module.exports = connection;