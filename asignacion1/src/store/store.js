import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { articlesReducer } from '../reducers/articlesReducers';

import { authReducer } from '../reducers/authReducer';
import { categoriasReducer } from '../reducers/catogoriasReducers';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    articles: articlesReducer,
    categorias: categoriasReducer,
});


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);