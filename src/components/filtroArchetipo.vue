<script>
    import {store} from '../store';
    import axios from 'axios';
    export default {
        name: 'filtroArchetipo',
        data(){
            return{
                store
                }
            },
    }
</script>

<template>
    <div>
        <select id="filtoArchetipo">
            <option v-for="(element, index) in store.arrayFilterArchetype" :key="index" :value="element.archetype_name">
                {{element.archetype_name}}
            </option>
        </select>
    </div>
</template>