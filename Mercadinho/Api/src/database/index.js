const mysql = require('mysql2/promise');
// const bd = new mysql()

module.exports = class DB {
  constructor() {
	  this.connection = null
}

	async __createConnection() {
		this.connection = await mysql.createConnection({
      host:'localhost',
      user:'root',
      password:'',
      database:'mercado_ronei',
      port: 3306
    })
	}

	async __closeConnection() {
		await this.connection.end()
	}

//   async init() {
// 		try {
// 			console.log('chegou aki')
// 			await this.__createConnection()
// 			const result = await this.__selectData()
			
// 			return result
// 		} catch (err) {
// 			console.log('err =>', err)
// 		} finally {
// 			await this.__closeConnection()
// 		}
// 	}
	async __insertData(value){

		try {
			console.log(value)
			await this.__createConnection();
			const insert = await this.connection.query(
				value
			)
			console.log('results' + JSON.stringify(insert))
			return JSON.stringify(insert)
			
		} catch (err) {
			console.log(err)
		} finally{
			this.__closeConnection();
		}
		// const insert = await this.connection.query(
		// 	"insert into sub_category(Type_Product_Name) values('Moda Infanto Juvenil');"
		// )
		// // nesta queryreq estara qualquer tipo de insert vindo das classes requisitantes
		
	}
	async __selectData() {
		try {
			console.log('chegou aki')
			await this.__createConnection()
			const [ select ] = await this.connection.query("select * from sub_category")
			// console.log(select.TextRow)
			// return JSON.stringify(select)
			return select
			
			
		} catch (err) {
			console.log('err =>', err)
		} finally {
			console.log('chegou no finally')
			await this.__closeConnection()
		}

	}
	async __updateData(queryUpdate) {
		try {
			await this.__createConnection();
			console.log('entrou em update ' + queryUpdate)
			const [ select ] = await this.connection.query( queryUpdate )
			console.log(select)
			return {result: 'Produto auterado com Sucesso'}
		} catch (err) {
			return err
		} finally {
			await this.__closeConnection();
		}
	}
	async __deleteData(queryDelete) {
		try {
			await this.__createConnection();
			const [ select ] = await this.connection.query(queryDelete)
			return 'Produto removido com Sucesso'
		} catch (err) {
			return err
		} finally {
			await this.__closeConnection();
		}
	}
	// async __transectionDate () {
		
	// }
}