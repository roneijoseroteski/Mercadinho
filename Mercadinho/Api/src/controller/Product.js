const mysql = require('../database/index');

const Router = require('express');
const router = Router();

router.get('/', async(req,res,next) => {
  try{
    // const conectDB = db.conectDB
    // const connectDB = db.__createConnection();
    // res.send('deu certo, zozo sai amanha confia');
    // console.log('teste')
     const test = await new mysql();
     const re = await test.__selectData();
  //   re.forEach(element => {
  //     res.send(element.Type_Product_Name)

    
  // });
  
  next()
  res.send(re);
  // res.send(re)
    

  }catch(err){
    res.send(err)
  }

 
});
router.post('/registerProduct', async(req,res,next) => {
  try {
    console.log('alo' + req.body.Product)
    let value = await `insert into sub_category(Type_Product_Name) values('${req.body.Product}');`
    // console.log('chegou' + value)
    const test = await new mysql();
    const postProduct = await test.__insertData(value);

    next()
    res.send(postProduct)

  } catch (err) {
    res.send(err)
  }
});
router.delete('/:id', async(req,res,next) => {
  try {
    let value = `delete from sub_category where sub_category.product_type_ID = ${req.params.id}`;
    const mysql = await new mysql();
    const result = await mysql.__deleteData(value);
    next();
    res.send(result);
  } catch (err) {
    res.send(err)
  }
});
router.put('/:id', async(req,res,next) => {
  // console.log('deu certo mercado')
  // console.log(req.params.id)
  // console.log(req.body)
  try {
    let value = `update sub_category set Type_Product_Name = '${req.body.Product}' where sub_category.product_type_ID = ${req.params.id}`
    
    
    const mysql1 = await new mysql();
    console.log('passsou aki')
    const result = await mysql1.__updateData(value);
    next();
    res.send(result)
  } catch (err) {
    res.send(err)
  }
});

module.exports = router;