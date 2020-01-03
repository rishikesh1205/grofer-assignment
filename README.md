# grofer-assignment

This is REST API Service for the Product Catalog. This API includes facility to basic operations like create, delete, update and search products from a sophisticated database.

You use the hosted URL here [https://grofers-store.herokuapp.com/](https://grofers-store.herokuapp.com/)

You can also run the project in local.

## Run in Local

## Pre Requisites
  * [Node.js](https://nodejs.org/)
  * [MongoDB](https://www.mongodb.com/)

## Steps
### `git clone https://github.com/rishikesh1205/grofer-assignment.git`
Clone the Github Repository

### `cd grofer-assignment`
Navigate to the directory.

### Create a `.env` file and add the following line
`MONGO_URL='YOUR_MONGO_URI'`

### `npm install`
Install required dependencies on node_modules.

### `npm start`
Starts the server on port 8030

## Use the hosted heroku service

Base URI: [https://grofers-store.herokuapp.com/](https://grofers-store.herokuapp.com/)

## API Endpoints

* /get-product – Retrieves a product when given an ID
* /create-product – Creates a product when given an ID and Product Details
* /update-product – Edits a product when given an ID and Product Details
* /delete-product – Deletes a product when given an ID
* /search-products – Searches products based on the filters such as name, brand name or category.

## EXAMPLE REQUEST:
### Get all products:
`GET  https://grofers-store.herokuapp.com/get-product/`
###  Get product for an ID:
`GET  https://grofers-store.herokuapp.com/get-product/id`
###  Create product:
`POST  https://grofers-store.herokuapp.com/create-product/`
JSON Request Body:
```javascript
{
	"name" : "Galaxy Note 10",
	"brand_name" : "Samsung",
	"categories" : ["Phone"]
}
```
###  Update product:
`PUT  https://grofers-store.herokuapp.com/update-product/id`

### Delete product:
`DELETE  https://grofers-store.herokuapp.com/delete-product/id`

### Search products:
### Search product by name:
`GET  https://grofers-store.herokuapp.com/search-products?name=name`
###  Search product by name and brand_name
`GET https://grofers-store.herokuapp.com/search-products?name=te&brand_name=samsung`

