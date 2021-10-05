const Mysql = require('../database/index');

const Router = require('express');
const router = Router();

const mysql = new Mysql();

router.get('/', async(req,res,next) => {
  try{
    const re = await mysql.__selectData();
  next()
  res.send(re);

    

  }catch(err){
    res.send(err)
  }

 
});
router.post('/registerProduct', async(req,res,next) => {
  try {
    let value = await `insert into sub_category(Type_Product_Name) values('${req.body.Product}');`

    const postProduct = await mysql.__insertData(value);

    next()
    res.send(postProduct)

  } catch (err) {
    res.send(err)
  }
});
router.delete('/:id', async(req,res,next) => {
  try {
    let value = `delete from sub_category where sub_category.product_type_ID = ${req.params.id};`

    const result = await mysql.__deleteData(value);
    next();
    res.send(result);
  } catch (err) {
    res.send(err)
  }
});
router.put('/:id', async(req,res,next) => {
  try {
    let value = `update sub_category set Type_Product_Name = '${req.body.Product}' where sub_category.product_type_ID = ${req.params.id}`

    const result = await mysql.__updateData(value);
    next();
    res.send(result)
  } catch (err) {
    res.send(err)
  }
});


module.exports = router;