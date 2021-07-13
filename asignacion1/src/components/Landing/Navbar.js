import React from 'react'
import '../../styles/css/Innecesary/header.css'
import '../../styles/css/Innecesary/styles.css'


export const Navbar = () => {
    return (
        <div>
            <header className="header">
                <img src={`./images/appland.png`} alt=""/>
                <p id="about">About Us</p>
                <p id="shopping">Shopping</p>
                <input type="search" defaultValue="" placeholder="&#xf002; Search" id="icon" />
                <button type="submit" id="signUp" className="btn btn-color">Sign Up</button>
                <button type="submit" id="signIn" className="btn btn-color">Sign In</button>
            </header>
        </div>
    )
}
