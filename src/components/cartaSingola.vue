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
        <div>
            <p>
                NAME : {{carteciclate.name }}
            </p>
            <p v-if="carteciclate.archetype">
                ARCHETIPO : {{carteciclate.archetype }}
            </p>
            <p v-if="carteciclate.type !== 'Spell Card' && carteciclate.type !== 'Trap Card'">
                ATK : {{carteciclate.atk }}
            </p>
            <p v-if="carteciclate.type !== 'Spell Card' && carteciclate.type !== 'Trap Card'">
                DEF : {{ carteciclate.def }}
            </p>
            <p v-if="carteciclate.type == 'Spell Card' || carteciclate.type == 'Trap Card'">
                {{carteciclate.desc }}
            </p>
            
        </div>
        
    </div>
</template>

<style lang="scss" scoped>

    .carta{
        flex-basis: calc(100%/ 6 - 5px);
        display: flex;
        align-items:center;
        align-items: center;
        padding: 2px;
        position: relative;
        &:hover div {
            display: block;
            cursor: default;
        }

        img {
            width: 100%;
            border: 1px solid rgb(35, 31, 31);
            box-shadow: 3px 17px 18px -1px #000000;
            display: block;
        }
        div{
            position: absolute;
            display: flex;
            align-items: center;      
            top:0px;
            left: 2px;
            right:2px;
            background-color: rgba(128, 128, 128, 0.845);
            max-height: 260px;
            overflow-y: auto;
          
            padding: 10px;
            display: none;
            p {
                text-transform: uppercase;
                color: white;
                line-height: 0.8rem;
                font-size: small;

            }
        }

    }
</style>