import React, { useEffect, useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Category } from '../screens/Category'
import { EspecificProductPage } from '../screens/EspecificProductPage'
import { Landing } from '../screens/Landing'
import { ProductPage } from '../screens/ProductPage'
import { SignIn } from '../screens/SignIn'
import { SignUp } from '../screens/SignUp'

import { PublicRouters } from './PublicRouters'
//import { PrivateRouters } from './PrivateRouters'
import { useSelector } from 'react-redux'

export const AuthRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const state = useSelector(state => state?.auth)

    useEffect(() => {
        if(state?.uid){
            setIsLoggedIn(true);
        }else{
            setIsLoggedIn(false);
        }
    }, [state])
    return (
        <>
                <Switch>
                    <PublicRouters
                        exact
                        path="/screens/signIn"
                        component={SignIn}
                        isAuthenticated={isLoggedIn}
                    />
                    <PublicRouters
                        exact
                        path="/screens/signUp"
                        component={SignUp}
                        isAuthenticated={isLoggedIn}
                    />
                    <Route
                        exact
                        path="/screens/productPage"
                        component={ProductPage}
                    />
                    <Route
                        exact
                        path="/screens/landing"
                        component={Landing}
                    />
                    <Route
                        exact
                        path="/screens/especificProduct/:idProducto"
                        component={EspecificProductPage}
                        isAuthenticated={isLoggedIn}
                    />
                    <Route
                        exact
                        path="/screens/category"
                        component={Category}
                    />
                    <Redirect to="/screens/landing" />
                </Switch>
            </>
        
    )
}
