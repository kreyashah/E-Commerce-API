# E-Commerce-API
An ecommerce api use to manage product inventory

# Getting Started
Install all dependencies using npm install.
Project will run on port 3000
After installing all the dependencies write "node app.js" in the terminal

# Routes

  ## Create a product:
  URL:localhost:3000/products/create
  
  Method:POST
  
  Sample Data: {"name":"laptop","quantity":10}
  

 ## Get all products:
  URL:localhost:3000/products
  
  Method:GET

 ## Delete a product:
  URL:localhost:3000/products/:productId
  
  Method:DELETE
  
 ## Update a product:
  URL:localhost:3000/products/:productId/update_quantity/?number=10
  
  Method:POST

