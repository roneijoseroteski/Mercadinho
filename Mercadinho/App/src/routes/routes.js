import Login from '../view/login.vue';
// import CadastroProduto from '../view/cadastroProduct.vue';
import ViewProduct  from '../view/viewProduct.vue';
const CadastroProduto = () => import('../view/cadastroProduct.vue');
// import CadastroProduto from '../view/cadastroProduct.vue';
export const routes = [
    {
        path: '',
        name: 'login',
        component: Login,
        menu: false
    },
    {
        path: '/CadastroProduto',
        name: 'cadastroProduto',
        component: CadastroProduto,
        titulo: 'Cadastro de Produtos',
        menu: true
    },
    {
        path: '/ViewProduct',
        name: 'ViewProduct',
        component: ViewProduct,
        titulo: 'visualizar Produtos',
        menu: true
    },
    {
        path: '*',
        name: 'error404',
        component: Login,
        menu: false
    },
]
