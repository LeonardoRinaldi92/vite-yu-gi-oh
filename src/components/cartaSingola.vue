<script>
    import axios from 'axios';
    import {store} from '../store';
    export default {
        name: "cartaSingola",
        data(){
            return{
                store
            }
        },  
    }
    

</script>

<template>
    <div class="carta">
        <span>
            {{store.pagina}}
        </span>
        
    </div>
</template>

<style lang="scss" scooped>

    .carta{
        width: 100px;

    }
</style>