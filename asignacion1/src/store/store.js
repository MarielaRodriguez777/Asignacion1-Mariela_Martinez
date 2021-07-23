import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { articlesReducer } from '../reducers/articlesReducers';

import { authReducer } from '../reducers/authReducer';
import { categoriasReducer } from '../reducers/catogoriasReducers';
import { filterReducer } from '../reducers/filterReducer';
import { rutasReducer } from '../reducers/rutasReducers';
import { selectCategoriaReducer } from '../reducers/selectCatogoriaReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    articles: articlesReducer,
    categorias: categoriasReducer,
    rutas: rutasReducer,
    categoria: selectCategoriaReducer,
    filter: filterReducer,
});


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);