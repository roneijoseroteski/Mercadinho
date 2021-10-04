<template>
    <nav class="navMenu">
        <ul>
            <li
                v-for="(rota, index) in rotas"
                :key="`rota-${index}`"
            >
                <router-link
                    :to="rota.path ? rota.path : '/'"
                >
                    {{ rota.titulo }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>
    
<script>
export default {
    name: 'Menu',

    props: {
        rotas: {
            type: Array,
            default: () => [],
            required: true
        }
    },
}
// default: () => ([]),
</script>

<style scoped>
ul li {
    display: inline-block;
    list-style: none;
    margin-right: 20px;
    text-decoration:none;
}
ul {
    display: flex;
    justify-content: center;
    text-decoration:none;
}
a:link {
  text-decoration:none;
}
.navMenu {
  background-color: antiquewhite;
}
</style>
