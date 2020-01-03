const mongoose = require('mongoose')
const Product = require('./Product');
require('dotenv').config()

mongoose.Promise = global.Promise;
mongoose.connect(`${process.env.MONGO_URL || 'mongodb+srv://root:rishikesh@cluster1-ysedy.mongodb.net/test?retryWrites=true&w=majority'}`, { useNewUrlParser: true })
    .then(() => { console.log("Database started") },
        (error) => console.log(error));
mongoose.set('useFindAndModify', false);
const Schema = mongoose.Schema;
const db = {
    Product: Product(mongoose, Schema),
}
module.exports = db;
