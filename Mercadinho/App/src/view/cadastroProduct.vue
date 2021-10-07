<template>
    <div class="corpo">

    <div class="formulario">
      <form id="formularioProductone"  autocomplete="off" @submit.prevent >
        <fieldset>
          <legend> Cadastro de Produtos</legend>
          <label>Nome do Produto: </label><input v-model="Product" type="text"><br>
          <button class="btn_submit" @click="registerProduct(Product)" >Cadstrar</button>
          <!-- <button class="btn_submit" v-if="Product == false" @click="registerProduct(Product)" >Cadstrar</button> -->
          <!-- <button class="btn_submit" v-else @click="registerProduct(Product)" >Alterar</button> -->
        </fieldset>
      </form>
    </div>
      <!-- {{Product}} -->
    </div>
</template>
    
<script>

export default {
  name: 'ProductRegister',
  // props : [ 'ProductUpdate' ],
  data() {
    return {
      Product: ''
    }
  },
  methods: {
    registerProduct(Product) {
       console.log('cadastrado ' + Product)
       this.$http.post('http://localhost:3000/product/registerProduct',{Product : Product})
       .then(response => {
        this.$bvToast.toast(`${response.data.result}`, {
          title: 'Auterado com Sucesso',
          solid: true,
          autoHideDelay: 5000,
          noCloseButton: true,
          noautohde: true,
          toaster: 'b-toaster-bottom-center'
        })
       })
    }
  }
}
</script>
<style scoped>
  .corpo {
    font-family:  Helvetica, sans-serif;
    width:100%;
    margin: 0 auto;
  }
  .formulario {
    padding: 2px;
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn_submit {
    border-radius: 5px;
    padding: 2px;
    margin-top: 5px ;
    background-color: aliceblue;

  }

</style>
