<script>
    import {store} from '../store';
    import axios from 'axios';
    export default {
        name: "bottoni",
        data(){
            return{
                store
                }
            },
        methods: {
            avanti(){
                store.numero += 12           
                store.pathOnScreen = store.pathBase + store.pathPagina + store.numero
                axios.get(this.store.pathOnScreen)
                .then( (res) =>{
                this.store.arrayCarte = res.data.data
                })
            },
            indietro(){
                if (store.numero > 0) {                   
                    store.numero -= 12
                    store.pathOnScreen = store.pathBase + store.pathPagina + store.numero
                    axios.get(this.store.pathOnScreen)
                    .then( (res) =>{
                    this.store.arrayCarte = res.data.data
                    })
                }
            },
        },
    }
</script>

<template>
<button class="right" @click="avanti">avanti</button>
<button v-if="store.numero > 0" class="left"  @click="indietro">indietro</button>
</template>

<style lang="scss" scooped>
    button{
        position: absolute;
        text-transform: uppercase;
        padding: 20px;
        top: 50%;
        }   
    .left {
        left: 70px;

    }
    .right {
        right: 70px;
    }


</style>