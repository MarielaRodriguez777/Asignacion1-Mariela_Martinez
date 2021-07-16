import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/css/Innecesary/header.css'
import '../../styles/css/Innecesary/styles.css'


export const Navbar = () => {
    return (
        <div>
            <header>

                <nav className="header">
                
                    
                    <img src={`./images/appland.png`} alt=""/>
                
                    <NavLink
                        exact
                        to="/"
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
                    </div>
                    
                
                    
                    
                </nav>
                
            </header>
        </div>
    )
}
