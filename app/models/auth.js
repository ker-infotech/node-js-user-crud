const mongoose = require('mongoose');
const schema = mongoose.Schema;

const authSchema = new schema({
    username: String,
    password: String
});

module.exports = mongoose.model( 'auth', authSchema );