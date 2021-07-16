import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from '../../action/auth';

import '../../styles/css/Innecesary/header.css'
import '../../styles/css/Innecesary/styles.css'


export const Navbar = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state?.auth)
    
    const handleLogout = () => {
        dispatch( startLogout() )
    }
    return (
        <div>
            <header>

                <nav className="header">
                
                    
                    <img src={`./images/appland.png`} alt=""/>
                
                    <NavLink
                        exact
                        to="/screens/especificProduct"
                    >
                        <p id="about">About Us</p>
                    </NavLink>

                    <NavLink
                        exact
                        to="/screens/category"
                    >
                    
                        <p id="shopping">Shopping</p>
                    </NavLink>
                    
                    <input type="search" defaultValue="" placeholder="&#xf002; Search" id="icon" />


                    <div id="sign">
                        {!state?.name
                            ? <>
                                <NavLink
                                    exact
                                    to="/screens/signUp"
                                >
                                    <button type="submit" id="signUp" className="btn btn-color">Sign Up</button>
                                </NavLink>
                                <NavLink
                                    exact
                                    to="/screens/signIn"
                                >
                                    <button type="submit" id="signIn" className="btn btn-color">Sign In</button>
                                </NavLink>
                            </>
                            :<>
                                <button id="logOut" className="btn btn-color" onClick={handleLogout}>LogOut</button>
                            </>
                        }
                    </div>
                    
                
                    
                    
                </nav>
                
            </header>
        </div>
    )
}
