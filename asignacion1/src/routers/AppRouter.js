import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Navbar } from "../components/Landing/Navbar";
import { AuthRouter } from "./AuthRouter";
import { useDispatch } from 'react-redux'
import { firebase } from "../firebase/firebase-config";
import { login } from "../action/auth";
import { Loading } from "../components/loading/Loading";
import { setArticles } from "../action/articles";
import { loadArticlesFirebase} from "../helpers/loadArticlesFirebase";
import { loadCategorias } from "../helpers/loadCategorias";
import { setCategorias } from "../action/categorias";

export const AppRouter = () => {  

    const dispatch = useDispatch();

    const [cheking, setCheking] = useState(true);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async(user) => {

            dispatch(setArticles(await loadArticlesFirebase()));
            dispatch(setCategorias(await loadCategorias()));
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName, user.photoURL));
            }
            setCheking(false);
        });
    }, [dispatch, setCheking]);
    /* console.log(cheking) */

    if (cheking) {
        return (
            <>
                    <Loading />;
            </>
        ) 
            
    }

    return (
        <Router>
            <Navbar />
            <>
                <Switch>
                    <Route exact path="/screens" component={AuthRouter} />

                    <Route path="/" component={AuthRouter} />
                </Switch>
            </>
        </Router>
    );
};
