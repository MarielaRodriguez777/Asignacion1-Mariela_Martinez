import {db} from '../firebase/firebase-config'

export const loadArticlesFirebase = async () => {
    const articlesSnap = await db.collection(`articles`).get();
    const articles = [];

    articlesSnap.forEach( snapHijo => {
        articles.push ({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });

    return articles
}
