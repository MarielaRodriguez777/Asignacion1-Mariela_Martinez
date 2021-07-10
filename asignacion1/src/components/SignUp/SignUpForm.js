import React from 'react'

import '../../styles/css/SignIn/btn.css'
import '../../styles/css/SignIn/signIn.css'
import '../../styles/css/SignIn/social-btn.css'


export const SignUpForm = () => {
    return (
        <div className="div_centrado">
            <div className="box_container">
                <form className="formSignUp" >
                    <div>
                        <img className="image" src="./images/appland.png" />
                        <h1 className="space">Sign Up</h1>
                    </div>
                    <div>
                        <input className="auth_input" type="email" name="email" id="email" placeholder="Email" autocomplete="false" />
                        <input className="auth_input" type="password" name="password" id="password" placeholder="Password" autocomplete="false" />
                        <input className="auth_input" type="password" name="repeat password" id="repeatPassword" placeholder="Repeat Password" autocomplete="false" />
                        <button type="submit" className="btn">Sign Up</button>
                    </div>
                    <div>
                        <p className="linea"><span>Or</span></p>
                        <button className="social-signin facebook">Sign Up with facebook</button>
                        <button className="social-signin google">Sign Up with Google+</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
