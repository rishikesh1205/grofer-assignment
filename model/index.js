const mongoose = require('mongoose')
const Product = require('./Product');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://root:rishikesh@cluster1-ysedy.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});
mongoose.set('useFindAndModify', false);

const Schema = mongoose.Schema;

const db = {
    Product : Product(mongoose , Schema),
}
module.exports = db;