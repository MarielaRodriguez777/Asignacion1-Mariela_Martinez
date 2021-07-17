import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Navbar } from "../components/Landing/Navbar";
import { AuthRouter } from "./AuthRouter";

import { useDispatch } from 'react-redux'
import { firebase } from "../firebase/firebase-config";
import { login } from "../action/auth";
import { Loading } from "../components/loading/Loading";

export const AppRouter = () => {  

    const dispatch = useDispatch();

    const [cheking, setCheking] = useState(true);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
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
