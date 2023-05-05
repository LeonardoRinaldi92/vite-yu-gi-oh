import { reactive } from "vue";

export const store = reactive (
    {
        arrayCarte: [],
        numero: 0,
        pathBase: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=12&offset=0',
    }
)