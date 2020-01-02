const mongoose = require('mongoose')
const Product = require('./Product');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/ecommerceDB', {useNewUrlParser: true});
mongoose.set('useFindAndModify', false);

const Schema = mongoose.Schema;

const db = {
    Product : Product(mongoose , Schema),
}
module.exports = db;