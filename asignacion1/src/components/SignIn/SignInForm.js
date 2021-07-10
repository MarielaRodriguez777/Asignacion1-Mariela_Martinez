import React from 'react'

import '../../styles/css/SignIn/btn.css'
import '../../styles/css/SignIn/signIn.css'
import '../../styles/css/SignIn/social-btn.css'

export const SignInForm = () => {
    return (
        <div className="div_centrado">
            <div className="box_container">
                <form className="formSignIn" >
                    <div>
                        <img className="image" src="./images/appland.png"/>
                        <h1 className="space">Sign In</h1>
                    </div>
                    <div>
                        <input className="auth_input" type="text" name="username" id="username" placeholder="Username" />
                        <input className="auth_input" type="password" name="password" id="password" placeholder="Password" />
                        <button type="submit" className="btn">Sign In</button>
                    </div>
                    <div>
                        <p className="linea"><span>Or</span></p>
                        <button className="social-signin facebook">Log in with facebook</button>
                        <button className="social-signin google">Log in with Google+</button>
                    </div>
                    <div className="member" >
                        <a href="">Not a member? Sign Up</a>
                    </div>
                </form>
            </div>
        </div>
    )
}
