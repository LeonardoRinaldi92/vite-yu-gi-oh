<script>
    import {store} from '../store';
    import axios from 'axios';
    export default {
        name: 'filtroArchetipo',
        data(){
            return{
                store,
                Archetype : '',
                GeneralPathFiltered : '',
                GeneralArrayFiltered : [],

                }
            },
        methods:{
            applicaFiltro(){
                store.filterArchetype = this.Archetype.split(' ').join('%20')
                this.pathFiltrato()
                axios.get(store.pathOnScreen)
                .then( (res) =>{
                this.store.arrayCarte = res.data.data
                })
                axios.get(this.GeneralPathFiltered)
                .then( (res) =>{
                this.GeneralArrayFiltered = res.data.data
                this.salvaLunghezza()
                })
            },
                
            pathFiltrato(){
                store.numero = 0
                store.pathPagina= '&num=12&offset=',
                store.pathOnScreen = store.pathBase + store.pathFilter + store.filterArchetype + store.pathPagina + store.numero
                this.GeneralPathFiltered = store.pathBase + store.pathFilter + store.filterArchetype
            },

            salvaLunghezza(){
                store.filteredArrayLength = this.GeneralArrayFiltered.length
                console.log(store.filteredArrayLength)

            },

            reset(){
                if (store.numero !== 0 || this.Archetype !== ''){
                    this.Archetype = '',
                    store.numero = 0,
                    store.pathPagina= '?num=12&offset=',
                    store.pathOnScreen = store.pathBase + store.pathPagina + store.numero
                    axios.get(store.pathOnScreen)
                    .then( (res) =>{
                    store.arrayCarte = res.data.data
                    })
                }

            }


        },
    }
</script>

<template>
    <div class="line">
        <div>
            <select id="filtoArchetipo" v-model="Archetype" @change="applicaFiltro">
                <option value="" disabled> Cerca per Archetipo</option>
                <option v-for="(element, index) in store.arrayFilterArchetype" :key="index" :value="element.archetype_name">
                    {{element.archetype_name}}
                </option>
            </select>
            <span v-if="store.filterArchetype !== ''">
                ELEMENTI TROVATI : {{ GeneralArrayFiltered.length }}
            </span>
        </div>
        <div>
            <button @click="reset"> reset </button>
        </div>
    </div>
    
</template>

<style lang="scss" scooped>
    .line{
        display: flex;
        justify-content: center;
        align-items: center;
        div{
            button {
            margin-left: 100px;
        }

        }

    }

</style>