import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext'
import '../styles/css/SignIn/btn.css'
import '../styles/css/SignIn/signIn.css'
import '../styles/css/SignIn/social-btn.css'
import { types } from '../types/types'

export const SignIn = ({history}) => {

    const {dispatch} = useContext( AuthContext );

    const handleSignIn = () => {

        dispatch({
            type: types.signIn,
            payload: {
                name: 'Mariela'
            }
        })

        history.replace('/');
    }

    return (
        <div className="body_Sign" >

            <div className="div_centrado">
                <div className="box_container">
                    <form className="formSignIn" >
                        <div>
                            <img className="image" src={`./images/appland.png`} alt="logo" />
                            <h1 className="space">Sign In</h1>
                        </div>
                        <div>
                            <input className="auth_input" type="text" name="username" id="username" placeholder="Username" />
                            <input className="auth_input" type="password" name="password" id="password" placeholder="Password" />
                            <button type="button" className="btn_sign" onClick={handleSignIn}>Sign In</button>
                        </div>
                        <div>
                            <p className="p-size linea"><span>Or</span></p>
                            <button className="social-signin facebook">Log in with facebook</button>
                            <button className="social-signin google">Log in with Google+</button>
                        </div>
                        <div className="member" >
                            <a href="url">Not a member? Sign Up</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
