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
            axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=12&offset=0')
            .then( (res) =>{
                this.store.arrayCarte = res.data.data
            })
        },       
    }
    }
</script>

<template>
    <div class="boxCard">
        <cartaSingola v-for="(element, index) in store.arrayCarte" :carteciclate="element" />
        
    </div>
</template>

<style lang="scss" scooped>
    .boxCard{
        width: 80%;
        margin: 0 auto;
        height: 100%;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }
</style>
