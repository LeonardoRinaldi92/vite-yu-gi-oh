<script>
    import axios from 'axios';
    import {store} from '../store';
    import cartaSingola from './cartaSingola.vue';
    export default {
      name: 'mainComponent',
      components: {
        cartaSingola,
      },

    data(){
        return{
            store,
        }
    },
    created(){
        this.chiamataApi()
    },
    methods: {
        chiamataApi() {
            axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
            .then( (res) =>{
                this.store.arrayCarte = res.data.data

                this.paginaVisualizzata()
            })
        },
        paginaVisualizzata() {
            this.store.pagina = this.store.arrayCarte.filter((element, index) => index >= 0 && index < 15 )
            console.log(this.store.pagina)
         }

    }
    }
</script>

<template>
    <div class="boxCard">
        <cartaSingola v-for="(element, index) in store.pagina"/>
        
    </div>
</template>

<style lang="scss" scooped>
    .boxCard{
        width: 80%;
        margin: auto;
        border: 1px solid black;
        height: 100%;
        padding: 30px;
    }
</style>
