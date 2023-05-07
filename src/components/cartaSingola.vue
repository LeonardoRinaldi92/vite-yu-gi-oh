<script>
    import {store} from '../store';
    export default {
        name: "cartaSingola",
        props: ['carteciclate'],
        data(){
            return{
                store
            }
        },  
    }
    

</script>

<template>
    <div class="carta">
        <img :src="carteciclate.card_images[0].image_url" alt="">
        <span>
            {{ carteciclate.desc }}
        </span>
        
    </div>
</template>

<style lang="scss" scooped>

    .carta{
        flex-basis: calc(100%/ 6 - 5px);
        display: flex;
        align-items:center;
        align-items: center;
        padding: 2px;
        position: relative;
        &:hover span {
            display: block;
            cursor: default;
        }

        img {
            width: 100%;
            border: 1px solid rgb(35, 31, 31);
            box-shadow: 3px 17px 18px -1px #000000;
            display: block;
        }
        span{
            position: absolute;
            text-transform: uppercase;
            top:60px;
            left: 2px;
            right:2px;
            background-color: rgba(128, 128, 128, 0.845);
            color: white;
            line-height: 0.8rem;
            font-size: small;
            padding: 10px;
            display: none;
        }

    }
</style>