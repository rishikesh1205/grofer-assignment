const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors');

const Controller = require('./controller');

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',(req,res) => {
    res.status(200).json({'message': 'App initialized'});
})
app.get('/get-product/:id' , Controller.getProductByID )
app.post('/create-product', Controller.createProduct)
app.put('/update-product/:id' , Controller.updateProduct )
app.delete('/delete-product/:id' , Controller.deleteProduct )
app.get('/search-products', Controller.searchDB)

app.listen(process.env.PORT || "8030" , () => {
    console.log("App started at 8030...")
})