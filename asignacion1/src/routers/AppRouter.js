import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { Landing } from '../screens/Landing';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route 
                        path="/screens" 
                        component={AuthRouter}
                    />

                    <Route
                        exact 
                        path="/" 
                        component={Landing}
                    />
                </Switch>
            </div>

        </Router>
    )
}
