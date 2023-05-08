<script>
    import axios from 'axios';
    import {store} from '../store';
    import cartaSingola from './cartaSingola.vue';
    import bottoni from './bottoni.vue';
    import filtroArchetipo from './filtroArchetipo.vue';
import FiltroArchetipo from './filtroArchetipo.vue';
    export default {
      name: 'mainComponent',
      components: {
    cartaSingola,
    bottoni,
    FiltroArchetipo
},

    data(){
        return{

            store,
            actualPath: store.pathBase + store.pathPagina + store.numero,


        }
    },
    created(){
        this.chiamataApi()
        this.chiamataApiFiltro()
    },
    methods: {
        chiamataApi() {
            axios.get(this.actualPath)
            .then( (res) =>{
                this.store.arrayCarte = res.data.data
                this.store.pathOnScreen = this.actualPath
                console.log(store.pathOnScreen)
            })
        },
        chiamataApiFiltro() {
            axios.get(store.pathFilterAll)
            .then( (res)=> {
                store.arrayFilterArchetype = res.data
                console.log (store.arrayFilterArchetype)

            } )
        }       
    }
    }
</script>

<template>
    <FiltroArchetipo/>
    <bottoni/>
    <div class="boxCard">
        <cartaSingola v-for="(element, index) in store.arrayCarte" :carteciclate="element" />
        
    </div>
</template>

<style lang="scss" scoped>
    .boxCard{
        width: 80%;
        margin: 0 auto;
        height: 100%;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        position: relative;
    }
</style>
