import { reactive } from "vue";

export const store = reactive (
    {
        arrayCarte: [],
        numero: 0,
        pathBase: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
        pathPagina: '?num=12&offset=',
        pathOnScreen: '',
        pathFilterAll: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
        arrayFilterArchetype: [],
        pathFilter: '?archetype=',
        filterArchetype: '',

        
    }
)