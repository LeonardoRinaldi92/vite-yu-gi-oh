<script>
    import {store} from '../store';
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
                console.log(store.numero)
            }
        },
    }
</script>

<template>
<button class="right" @click="avanti">avanti</button>
<button v-if="store.numero < 0" class="left">indietro</button>
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