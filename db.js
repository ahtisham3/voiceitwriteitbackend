const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DBKEY, {
    dbName: 'chatapp' // Wrap the database name in quotes
}).then(() => {
    console.log('Connected to the database');
}).catch((err) => {
    console.error('Error while connecting to the database:', err);
});
