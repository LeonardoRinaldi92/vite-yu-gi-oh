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
                store.numero += 15
                store.pathBase = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=12&offset=' + store.numero
                console.log(store.pathBase)
                axios.get(store.pathBase)
                .then( (res) =>{
                this.store.arrayCarte = res.data.data
                })
            },
            indietro(){
                if (store.numero > 0) {
                    
                    store.numero -= 15
                    store.pathBase = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=12&offset=' + store.numero
                    console.log(store.pathBase)
                    axios.get(store.pathBase)
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