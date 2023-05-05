<script>
    import axios from 'axios';
    import {store} from '../store';
    export default {
      name: 'mainComponent',

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
         }

    }
    }
</script>

<template>
    <div class="boxCard">
        
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
