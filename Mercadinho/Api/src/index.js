// Primeiros imports são de bibliotecas
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
// Depois vem imports de classes ou métodos
// Depois vem imports de utils
const mysql = require('./database/index');
const Product = require('./controller/Product')
const app = express();
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));


app.use('/product', Product)
// app.use('/registerProduct', Product)


// app.get('/', async (req, res) => {
//   // const bd = new mysql()
//   const result = await mysql.init()
//   result.forEach(element=> {
//     console.log(element.Type_Product_Name + "," + element.product_type_ID)
//   });
//   res.send(result[8].Type_Product_Name);
// });

app.listen(3000)