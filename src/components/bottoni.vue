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
                if (store.filterArchetype == '') {
                    store.numero += 12           
                    store.pathOnScreen = store.pathBase + store.pathPagina + store.numero
                    axios.get(this.store.pathOnScreen)
                    .then( (res) =>{
                    this.store.arrayCarte = res.data.data
                    console.log(store.numero)
                    })     
                } else {
                    if(store.filteredArrayLength > 12) {
                        if (store.numero < store.filteredArrayLength){
                            store.numero += 12           
                            store.pathOnScreen = store.pathBase + store.pathFilter + store.filterArchetype + store.pathPagina + store.numero
                            axios.get(store.pathOnScreen)
                            .then( (res) =>{
                            this.store.arrayCarte = res.data.data
                            console.log(store.numero)
                            })
                        }
                    }
                }
            },
            indietro(){
                if (store.numero > 0) {
                    if (store.filterArchetype == '') {
                    store.numero -= 12           
                    store.pathOnScreen = store.pathBase + store.pathPagina + store.numero
                    axios.get(this.store.pathOnScreen)
                    .then( (res) =>{
                    this.store.arrayCarte = res.data.data
                    console.log(store.numero)
                    })     
                } else {

                    store.numero -= 12           
                    store.pathOnScreen = store.pathBase + store.pathFilter + store.filterArchetype + store.pathPagina + store.numero
                    axios.get(store.pathOnScreen)
                    .then( (res) =>{
                    this.store.arrayCarte = res.data.data
                    console.log(store.numero)
                        })
                    }                   
                }
            },
        },
    }
</script>

<template>
<button v-if="(store.filteredArrayLength - store.numero) > 11 || store.filterArchetype == ''"  class="right" @click="avanti">avanti</button>
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