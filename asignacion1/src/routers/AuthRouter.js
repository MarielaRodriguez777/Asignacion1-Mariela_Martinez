import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Category } from '../screens/Category'
import { EspecificProduct } from '../screens/EspecificProduct'
import { Landing } from '../screens/Landing'
import { ProductPage } from '../screens/ProductPage'
import { SignIn } from '../screens/SignIn'
import { SignUp } from '../screens/SignUp'

export const AuthRouter = () => {
    return (
            <div>
                <Switch>
                    <Route
                        exact
                        path="/screens/signIn"
                        component={SignIn}
                    />
                    <Route
                        exact
                        path="/screens/signUp"
                        component={SignUp}
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
                        path="/screens/especificProduct"
                        component={EspecificProduct}
                    />
                    <Route
                        exact
                        path="/screens/category"
                        component={Category}
                    />
                    <Redirect to="/screens/landing" />
                </Switch>
            </div>
        
    )
}
