import {db} from '../firebase/firebase-config'

export const loadCategorias = async () => {
    const categoriasSnap = await db.collection(`categorias`).get();
    const categorias = [];

    categoriasSnap.forEach( snapHijo => {
        categorias.push ({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });

    return categorias
}