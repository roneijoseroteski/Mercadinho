<template>
    <div class="corpo" id="App">
        <meu-menu class="menu" :rotas="routes"/>
        <router-view></router-view>

    </div>
</template>
    
<script>
import Menu from '../src/components/menu/menu';
import { routes } from './routes/routes';

export default {
    name:'App',
    components: {
        'meu-menu': Menu
    },
    data(){
        return {
            routes: routes.filter(route => route.menu)
        }
    },
}
</script>
<style scoped>
  .corpo {
    font-family:  Helvetica, sans-serif;
    width:96%;
    margin: 0 auto;
    
  }
  .menu {
      display: flex;
      justify-content: center;
  }

</style>
