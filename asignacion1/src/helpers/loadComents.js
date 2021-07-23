import {db} from '../firebase/firebase-config'

export const loadComents = async () =>{
    const comentariosSnap = await db.collection(`comentarios`).get();
    const comentarios = [];

    comentariosSnap.forEach( snapHijo => {
        comentarios.push ({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });

    return comentarios
}