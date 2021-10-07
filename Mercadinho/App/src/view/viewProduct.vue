<template>
<div class="Product" >
  <div class="listar">
    <ul >
        <li  v-for="lisTProduct in lisTProduct" :key="lisTProduct.product_type_ID">
        {{ lisTProduct.Type_Product_Name }}
        <div><button class="btn-altera" @click="updateShow = !updateShow ,valueProductList(lisTProduct)">Edit</button>
        <button class="btn-delete" @click="deleteProduct(lisTProduct)">Delete</button></div>
        </li>
    </ul>
  </div>
<div class="Update" 
v-show="updateShow"
>
<!-- v-if="updateShow" -->
  <div class="formulario">
    <form id="formularioProductone"  autocomplete="off" @submit.prevent >
      <fieldset class="fieldset-formulario">
        <legend> Alterar de Produtos</legend><br>
        <div class="label-input">
          <label>Nome do Produto : </label><input v-model="values.Product" type="text"><br>
        </div>
        <div class="div-button-altera">
          <button class="btn_submit" @click="updateProduct()">Alterar</button>
        </div>
      </fieldset>
    </form>
  </div>
</div>
  <div class="rodape">
    <h1>Rodape</h1>
  </div>

</div>
</template>
<script>

export default {
    name: 'ViewProduct',
    data() {
      return {
        lisTProduct: [],
        updateShow: false,
        values: {
          Product: '',
          product_Id:'',
          
        }

      }
    },
    mounted() {
      this.getProduct();
    },
    methods: {
    getProduct() {
        this.$http.get('http://localhost:3000/product/')
        .then(Response => {
          this.lisTProduct = Response.data
        // console.log('vendo o que vem '   +  Response.data)
        })
    },
    updateProduct() {
      // this.Product = value.Type_Product_Name;
      console.log('entrou')
      // console.log('http://localhost:3000/product/',this.values, this.values.product_Id)
      this.$http.put('http://localhost:3000/product/' + this.values.product_Id, this.values)
      .then(response => {
        this.$bvToast.toast(`${response.data.result}`, {
          title: 'Auterado com Sucesso',
          solid: true,
          autoHideDelay: 5000,
          noCloseButton: true,
          noautohde: true,
          toaster: 'b-toaster-bottom-center'
        })
          console.log('deu certo ' + response.data.result)
      })
    },
    deleteProduct(idProduct) {
      console.log('http://localhost:3000/product/' + idProduct.product_type_ID)
      this.$http.delete('http://localhost:3000/product/' + idProduct.product_type_ID)
      .then(result => {
        this.$bvToast.toast(`${result.data.result}`, {
          title: 'Auterado com Sucesso',
          solid: true,
          autoHideDelay: 5000,
          noCloseButton: true,
          noautohde: true,
          toaster: 'b-toaster-bottom-center'
        })
        console.log('alo ' + result.data.result)
      })
    },
    valueProductList(value) {
      // console.log(value)
      this.values.product_Id = value.product_type_ID;
      this.values.Product = value.Type_Product_Name;
    }
}
}
</script>

<style  scoped>
  .Product {
    width: 100%;
    max-height: 300px;
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    }
  .rodape{
    margin: 0 auto;
    width: 100%;
    height: 100px;
    background: brown;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5px;

  }
  .btn-altera {
    border-radius: 5px;
    padding: 6px;
    margin: 2px;
  }
  .btn-delete {
    border-radius: 5px;
    padding: 6px;
    margin: 2px;
  }
  .btn_submit {
    border-radius: 5px;
    padding: 2px;
    margin: 2px;
  }
  .div-button-altera {
    display: flex;
    justify-content: flex-end!important;
    align-items: flex-end!important;
  }
  .label-input {
    display: flex;
    padding: 3px;
  }
  ul li {
    background: #cce5ff;
    margin: 1px;
    color: black;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h1 {
    /* margin: 0 auto; */
    display: block;
    color: black;
  }
  .listar {
    width: 50%;
    height: 300px;
    margin-bottom: 2px;
    margin: 0 auto;
    overflow: auto;
  }
  .formulario {
    padding: 2px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  legend {
    margin: 0 auto!important;
    display: flex;
    justify-content: center!important;
    align-items: center!important;
  }
  /* .fieldset-formulario {
    width: 100%;
  } */
</style>